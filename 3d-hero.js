/**
 * 360 DEGREES CONSULTING - HIGH-END 3D CORPORATE ORB ENGINE (CLIENT FINAL APPROVED)
 * 
 * Architecture:
 *   - Central 3D Corporate Sphere ("The 360° Orb") floating in midnight-navy atmospheric space (#06152B).
 *   - No flat 2D sticker: "360° DEGREES CONSULTING" is etched directly onto the dark blue 3D ball 
 *     with metallic specular gradients and luminous ambient cyan glow.
 *   - Multi-axial gyroscopic orbital rings (Azure & Metallic Navy) cradling the floating sphere.
 *   - Orbiting institutional beacon nodes representing IITs, IIMs, and Delhi University colleges.
 *   - Dual Parity:
 *       • Desktop/Laptop: Sits cleanly in dedicated right-hand column (zero text overlap).
 *       • Mobile/Tablet: Sits in dedicated breathing zone between headline and content (zero text overlap).
 *   - Real-time mouse parallax on desktop, touch swipe on mobile, 60fps battery-saving lifecycle.
 */

(function () {
  'use strict';

  // 1. Generate High-Definition Spherical Texture (2048 x 1024)
  function createOrbTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = 2048;
    canvas.height = 1024;
    const ctx = canvas.getContext('2d');

    // Deep Midnight Blue base matching the hero background (#071C38 -> #051329)
    const bgGrad = ctx.createRadialGradient(1024, 512, 80, 1024, 512, 950);
    bgGrad.addColorStop(0, '#0F2E58');
    bgGrad.addColorStop(0.35, '#0A2142');
    bgGrad.addColorStop(0.7, '#06162C');
    bgGrad.addColorStop(1, '#020914');
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, 2048, 1024);

    // Subtle Global Coordinate Lines (Technical Consultative Sheen)
    ctx.strokeStyle = 'rgba(56, 189, 248, 0.07)';
    ctx.lineWidth = 1.5;
    for (let y = 80; y < 1024; y += 95) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(2048, y);
      ctx.stroke();
    }
    for (let x = 60; x < 2048; x += 128) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, 1024);
      ctx.stroke();
    }

    // Helper to draw executive typography directly on the dark-blue surface
    function renderBranding(cx, cy, subTag) {
      ctx.save();
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';

      // 1. Luminous Brand Number "360°"
      ctx.save();
      ctx.font = '900 230px "Plus Jakarta Sans", "Montserrat", sans-serif';
      ctx.shadowColor = 'rgba(56, 189, 248, 0.7)';
      ctx.shadowBlur = 40;
      const numGrad = ctx.createLinearGradient(cx - 160, cy - 85, cx + 160, cy - 85);
      numGrad.addColorStop(0, '#FFFFFF');
      numGrad.addColorStop(0.45, '#E0F2FE');
      numGrad.addColorStop(1, '#38BDF8');
      ctx.fillStyle = numGrad;
      ctx.fillText('360°', cx, cy - 90);
      ctx.restore();

      // 2. Crisp Corporate Title "DEGREES CONSULTING"
      ctx.save();
      ctx.font = '800 62px "Plus Jakarta Sans", "Montserrat", sans-serif';
      ctx.shadowColor = 'rgba(56, 189, 248, 0.45)';
      ctx.shadowBlur = 20;
      ctx.fillStyle = '#FFFFFF';
      ctx.letterSpacing = '12px';
      ctx.fillText('DEGREES CONSULTING', cx, cy + 50);
      ctx.restore();

      // 3. Ultra-slim Luminous Horizon Divider
      ctx.save();
      const divGrad = ctx.createLinearGradient(cx - 240, cy + 112, cx + 240, cy + 112);
      divGrad.addColorStop(0, 'rgba(56, 189, 248, 0)');
      divGrad.addColorStop(0.5, 'rgba(56, 189, 248, 0.85)');
      divGrad.addColorStop(1, 'rgba(56, 189, 248, 0)');
      ctx.fillStyle = divGrad;
      ctx.fillRect(cx - 240, cy + 110, 480, 3);
      ctx.restore();

      // 4. Sub-Credo Line
      ctx.save();
      ctx.font = '600 32px "Plus Jakarta Sans", sans-serif';
      ctx.fillStyle = '#7DD3FC';
      ctx.letterSpacing = '7px';
      ctx.fillText(subTag, cx, cy + 160);
      ctx.restore();

      ctx.restore();
    }

    // Front Face (U = 0.25 -> X = 512, Y = 512) - Faces user on load!
    renderBranding(512, 512, 'RESEARCH  •  STRATEGY  •  IMPACT');

    // Back Face (U = 0.75 -> X = 1536, Y = 512) - Faces user on 180° rotation!
    renderBranding(1536, 512, 'IIT  •  IIM  •  DU ECOSYSTEM');

    const texture = new THREE.CanvasTexture(canvas);
    texture.generateMipmaps = true;
    texture.minFilter = THREE.LinearMipmapLinearFilter;
    return texture;
  }

  function initHeroOrb() {
    const container = document.getElementById('infosys-hero-canvas-wrap');
    if (!container) return;

    if (typeof THREE === 'undefined') {
      setTimeout(initHeroOrb, 100);
      return;
    }

    let width = container.clientWidth || 500;
    let height = container.clientHeight || 500;
    const isMobile = window.innerWidth < 992;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 1000);
    camera.position.set(0, 0, isMobile ? 22.5 : 20.5);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);

    container.innerHTML = '';
    container.appendChild(renderer.domElement);

    // 2. Lighting Rig (High-End Corporate Specular & Deep Midnight Mood)
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.5);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffffff, 2.0);
    keyLight.position.set(16, 22, 20);
    scene.add(keyLight);

    const azureRimLight = new THREE.PointLight(0x38BDF8, 4.0, 50);
    azureRimLight.position.set(-16, -12, 16);
    scene.add(azureRimLight);

    const topCyanLight = new THREE.PointLight(0x0284C7, 2.5, 40);
    topCyanLight.position.set(0, 16, -8);
    scene.add(topCyanLight);

    // 3. Central Master Group (Tilts with mouse parallax)
    const masterOrbGroup = new THREE.Group();
    scene.add(masterOrbGroup);

    // 4. THE 360° CORE ORB (Dark-Navy Sphere with Seamless Surface Branding)
    const orbTexture = createOrbTexture();
    const sphereRadius = 3.5;
    const sphereGeo = new THREE.SphereGeometry(sphereRadius, 64, 64);
    const sphereMat = new THREE.MeshStandardMaterial({
      map: orbTexture,
      roughness: 0.22,
      metalness: 0.65,
      emissive: 0x051833,
      emissiveIntensity: 0.5
    });
    const coreOrb = new THREE.Mesh(sphereGeo, sphereMat);
    // When rotation.y = 0, U = 0.25 (X = 512) directly faces the camera (+Z)
    coreOrb.rotation.y = 0;
    masterOrbGroup.add(coreOrb);

    // Luminous Atmospheric Halo around the sphere
    const haloGeo = new THREE.SphereGeometry(sphereRadius * 1.035, 32, 32);
    const haloMat = new THREE.MeshBasicMaterial({
      color: 0x38BDF8,
      transparent: true,
      opacity: 0.14,
      wireframe: false
    });
    const halo = new THREE.Mesh(haloGeo, haloMat);
    masterOrbGroup.add(halo);

    // 5. Multi-Axial Gyroscopic Orbital Rings
    // Ring 1: Primary Equatorial Track (Electric Azure #1D75D8)
    const ring1Geo = new THREE.TorusGeometry(5.2, 0.075, 16, 120);
    const ring1Mat = new THREE.MeshStandardMaterial({
      color: 0x1D75D8,
      metalness: 0.85,
      roughness: 0.2,
      emissive: 0x38BDF8,
      emissiveIntensity: 0.35
    });
    const ring1 = new THREE.Mesh(ring1Geo, ring1Mat);
    ring1.rotation.set(Math.PI / 3.4, 0, 0);
    masterOrbGroup.add(ring1);

    // Ring 2: Polar Orbital Track (Deep Corporate Navy Metallic #0A2A54)
    const ring2Geo = new THREE.TorusGeometry(6.1, 0.055, 16, 120);
    const ring2Mat = new THREE.MeshStandardMaterial({
      color: 0x0A2A54,
      metalness: 0.95,
      roughness: 0.25,
      emissive: 0x1E40AF,
      emissiveIntensity: 0.2
    });
    const ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
    ring2.rotation.set(-Math.PI / 3.8, Math.PI / 4, 0);
    masterOrbGroup.add(ring2);

    // Ring 3: Outer Fine Filament Orbit Track (#38BDF8 subtle glow)
    const ring3Geo = new THREE.TorusGeometry(6.9, 0.032, 16, 120);
    const ring3Mat = new THREE.MeshBasicMaterial({
      color: 0x38BDF8,
      transparent: true,
      opacity: 0.45
    });
    const ring3 = new THREE.Mesh(ring3Geo, ring3Mat);
    ring3.rotation.set(Math.PI / 5, -Math.PI / 3.5, 0);
    masterOrbGroup.add(ring3);

    // 6. Orbiting Institutional Beacon Nodes (IITs, IIMs, DU Colleges)
    const nodeGroup = new THREE.Group();
    masterOrbGroup.add(nodeGroup);

    const nodeGeo = new THREE.SphereGeometry(0.22, 16, 16);
    const nodeMat = new THREE.MeshStandardMaterial({
      color: 0xFFFFFF,
      emissive: 0x38BDF8,
      emissiveIntensity: 1.2,
      roughness: 0.1
    });

    // 3 nodes on Ring 1 orbit
    for (let i = 0; i < 3; i++) {
      const angle = (i / 3) * Math.PI * 2;
      const nm = new THREE.Mesh(nodeGeo, nodeMat);
      nm.position.set(
        Math.cos(angle) * 5.2,
        Math.sin(angle) * 5.2,
        Math.sin(angle * 2) * 0.8
      );
      nodeGroup.add(nm);
    }

    // 3 nodes on Ring 2 orbit
    for (let i = 0; i < 3; i++) {
      const angle = (i / 3) * Math.PI * 2 + Math.PI / 3;
      const nm = new THREE.Mesh(nodeGeo, nodeMat);
      nm.position.set(
        Math.cos(angle) * 6.1,
        Math.sin(angle * 2) * 1.1,
        Math.sin(angle) * 6.1
      );
      nodeGroup.add(nm);
    }

    // 7. Input Tracking (Mouse Parallax & Mobile Touch)
    let inputX = 0, inputY = 0;
    let targetX = 0, targetY = 0;

    window.addEventListener('mousemove', (e) => {
      const halfW = window.innerWidth / 2;
      const halfH = window.innerHeight / 2;
      inputX = (e.clientX - halfW) / halfW;
      inputY = (e.clientY - halfH) / halfH;
    });

    window.addEventListener('touchmove', (e) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        const halfW = window.innerWidth / 2;
        const halfH = window.innerHeight / 2;
        inputX = (touch.clientX - halfW) / halfW;
        inputY = (touch.clientY - halfH) / halfH;
      }
    }, { passive: true });

    // Responsive Viewport Resizer
    function handleResize() {
      if (!container) return;
      width = container.clientWidth;
      height = container.clientHeight;
      if (width && height) {
        camera.aspect = width / height;
        if (window.innerWidth < 992) {
          camera.position.z = 22.5;
        } else {
          camera.position.z = 20.5;
        }
        camera.updateProjectionMatrix();
        renderer.setSize(width, height);
      }
    }
    window.addEventListener('resize', handleResize);

    // Visibility Observer (Preserve 60fps GPU performance)
    let isVisible = true;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        isVisible = entry.isIntersecting;
      });
    }, { threshold: 0.05 });
    observer.observe(container);

    // 8. Master Animation Loop (Calm, Majestic, Enterprise Pace)
    function animate() {
      requestAnimationFrame(animate);

      if (!isVisible) return;

      // Gentle Parallax Tilt Easing
      targetX = inputX * 0.24;
      targetY = inputY * 0.18;
      masterOrbGroup.rotation.y += (targetX - masterOrbGroup.rotation.y) * 0.04;
      masterOrbGroup.rotation.x += (targetY - masterOrbGroup.rotation.x) * 0.04;

      // Sphere Self-Rotation (Rotates to show 360° branding around the orb)
      coreOrb.rotation.y += 0.003;

      // Gyroscopic Rings Harmonic Counter-Rotation
      ring1.rotation.z += 0.0022;
      ring2.rotation.z -= 0.0018;
      ring3.rotation.y += 0.0015;
      nodeGroup.rotation.z += 0.0020;

      renderer.render(scene, camera);
    }

    animate();
  }

  // Self-Init on DOM Ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initHeroOrb);
  } else {
    initHeroOrb();
  }
})();
