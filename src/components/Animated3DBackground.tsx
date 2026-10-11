import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export const Animated3DBackground: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [isLowPower, setIsLowPower] = useState(false);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setIsLowPower(true);
      return;
    }

    // 1. Scene setup
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x030712, 0.028);

    // 2. Camera setup
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    );
    camera.position.set(0, 10, 24);
    camera.lookAt(0, 0, 0);

    // 3. Renderer setup
    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: false,
        alpha: true,
        powerPreference: 'high-performance'
      });
    } catch {
      setIsLowPower(true);
      return;
    }

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setClearColor(0x000000, 0);

    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
    container.appendChild(renderer.domElement);

    // 4. Generate 3D Silicon Crystalline Lattice Mesh
    // We create a wavy grid of interconnected silicon nodes
    const cols = 55;
    const rows = 45;
    const spacing = 1.4;
    const totalPoints = cols * rows;

    const positions = new Float32Array(totalPoints * 3);
    const colors = new Float32Array(totalPoints * 3);
    const initialY = new Float32Array(totalPoints);

    const cyanColor = new THREE.Color(0x00f0ff);
    const blueColor = new THREE.Color(0x38bdf8);
    const deepColor = new THREE.Color(0x0f172a);

    let idx = 0;
    const xOffset = ((cols - 1) * spacing) / 2;
    const zOffset = ((rows - 1) * spacing) / 2;

    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        const x = i * spacing - xOffset;
        const z = j * spacing - zOffset;
        const y = Math.sin(i * 0.25) * Math.cos(j * 0.25) * 1.5;

        positions[idx * 3] = x;
        positions[idx * 3 + 1] = y;
        positions[idx * 3 + 2] = z;
        initialY[idx] = y;

        // Mix colors based on position
        const mixed = deepColor.clone().lerp(blueColor, 0.35);
        colors[idx * 3] = mixed.r;
        colors[idx * 3 + 1] = mixed.g;
        colors[idx * 3 + 2] = mixed.b;

        idx++;
      }
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    // Particle sprite texture (soft circular glow)
    const canvas = document.createElement('canvas');
    canvas.width = 32;
    canvas.height = 32;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      const gradient = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
      gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
      gradient.addColorStop(0.3, 'rgba(0, 240, 255, 0.8)');
      gradient.addColorStop(0.8, 'rgba(6, 182, 212, 0.2)');
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 32, 32);
    }
    const particleTexture = new THREE.CanvasTexture(canvas);

    const pointsMaterial = new THREE.PointsMaterial({
      size: 0.55,
      vertexColors: true,
      map: particleTexture,
      transparent: true,
      opacity: 0.45,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    const latticePoints = new THREE.Points(geometry, pointsMaterial);
    scene.add(latticePoints);

    // 5. Silicon Wafer Concentric Rings in deep background
    const waferGroup = new THREE.Group();
    const ringRadii = [18, 26, 34, 42];
    ringRadii.forEach((radius, i) => {
      const ringGeo = new THREE.RingGeometry(radius, radius + 0.08, 64);
      const ringMat = new THREE.MeshBasicMaterial({
        color: i % 2 === 0 ? 0x00f0ff : 0x38bdf8,
        transparent: true,
        opacity: 0.08 - i * 0.015,
        side: THREE.DoubleSide
      });
      const ring = new THREE.Mesh(ringGeo, ringMat);
      ring.rotation.x = Math.PI / 2;
      ring.position.y = -4;
      waferGroup.add(ring);
    });
    scene.add(waferGroup);

    // 6. Floating Electron Charge Carriers (Subtle drifting particles)
    const carrierCount = 60;
    const carrierGeo = new THREE.BufferGeometry();
    const carrierPos = new Float32Array(carrierCount * 3);
    const carrierVel = new Float32Array(carrierCount * 3);

    for (let c = 0; c < carrierCount; c++) {
      carrierPos[c * 3] = (Math.random() - 0.5) * 60;
      carrierPos[c * 3 + 1] = Math.random() * 15 - 5;
      carrierPos[c * 3 + 2] = (Math.random() - 0.5) * 45;

      carrierVel[c * 3] = (Math.random() - 0.5) * 0.02;
      carrierVel[c * 3 + 1] = (Math.random() - 0.5) * 0.015;
      carrierVel[c * 3 + 2] = (Math.random() - 0.5) * 0.02;
    }

    carrierGeo.setAttribute('position', new THREE.BufferAttribute(carrierPos, 3));
    const carrierMat = new THREE.PointsMaterial({
      size: 0.85,
      color: 0x38bdf8,
      map: particleTexture,
      transparent: true,
      opacity: 0.35,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });
    const carriers = new THREE.Points(carrierGeo, carrierMat);
    scene.add(carriers);

    // 7. Mouse tracking for subtle parallax
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // 8. Resize handler
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    // 9. Animation loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse lerp
      targetX += (mouseX - targetX) * 0.04;
      targetY += (mouseY - targetY) * 0.04;

      // Camera parallax tilt
      camera.position.x = targetX * 3.5;
      camera.position.y = 10 - targetY * 2.5;
      camera.lookAt(targetX * 1.5, 0, 0);

      // Undulate Silicon Lattice Wave
      const posAttr = geometry.attributes.position as THREE.BufferAttribute;
      const colAttr = geometry.attributes.color as THREE.BufferAttribute;
      const posArr = posAttr.array as Float32Array;
      const colArr = colAttr.array as Float32Array;

      let pIdx = 0;
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const x = posArr[pIdx * 3];
          const z = posArr[pIdx * 3 + 2];

          // Dual harmonic propagation wave
          const wave1 = Math.sin(x * 0.18 + elapsedTime * 0.65) * 1.4;
          const wave2 = Math.cos(z * 0.22 + elapsedTime * 0.5) * 1.2;
          const y = wave1 + wave2;

          posArr[pIdx * 3 + 1] = y;

          // Crests glow bright cyan; troughs stay deep navy
          const normalizedHeight = (y + 2.6) / 5.2;
          const pointColor = deepColor.clone().lerp(cyanColor, Math.max(0, Math.min(1, normalizedHeight * 0.75)));

          colArr[pIdx * 3] = pointColor.r;
          colArr[pIdx * 3 + 1] = pointColor.g;
          colArr[pIdx * 3 + 2] = pointColor.b;

          pIdx++;
        }
      }
      posAttr.needsUpdate = true;
      colAttr.needsUpdate = true;

      // Slow rotation of wafer rings
      waferGroup.rotation.y = elapsedTime * 0.02;

      // Drift carriers
      const cPos = carrierGeo.attributes.position.array as Float32Array;
      for (let c = 0; c < carrierCount; c++) {
        cPos[c * 3] += carrierVel[c * 3];
        cPos[c * 3 + 1] += carrierVel[c * 3 + 1];
        cPos[c * 3 + 2] += carrierVel[c * 3 + 2];

        // Wrap around boundaries
        if (cPos[c * 3] > 30) cPos[c * 3] = -30;
        if (cPos[c * 3] < -30) cPos[c * 3] = 30;
        if (cPos[c * 3 + 1] > 10) cPos[c * 3 + 1] = -5;
        if (cPos[c * 3 + 1] < -5) cPos[c * 3 + 1] = 10;
        if (cPos[c * 3 + 2] > 25) cPos[c * 3 + 2] = -25;
        if (cPos[c * 3 + 2] < -25) cPos[c * 3 + 2] = 25;
      }
      carrierGeo.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (renderer && renderer.domElement) {
        renderer.dispose();
      }
      geometry.dispose();
      pointsMaterial.dispose();
      particleTexture.dispose();
    };
  }, []);

  if (isLowPower) {
    return null;
  }

  return (
    <div
      ref={mountRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-85 transition-opacity duration-1000"
      aria-hidden="true"
    />
  );
};
