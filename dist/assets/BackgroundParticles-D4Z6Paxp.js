import{r,j as s}from"./index-B8iH4P54.js";import{R as S,e as F,a as O,M as _,b as g,u as w,V,c as k,d as I,S as T,C as N}from"./react-three-fiber.esm-CM6OMQ0m.js";function f(){return f=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var a in i)({}).hasOwnProperty.call(i,a)&&(e[a]=i[a])}return e},f.apply(null,arguments)}const $=()=>parseInt(S.replace(/\D+/g,"")),B=$();class D extends T{constructor(){super({uniforms:{time:{value:0},pixelRatio:{value:1}},vertexShader:`
        uniform float pixelRatio;
        uniform float time;
        attribute float size;  
        attribute float speed;  
        attribute float opacity;
        attribute vec3 noise;
        attribute vec3 color;
        varying vec3 vColor;
        varying float vOpacity;

        void main() {
          vec4 modelPosition = modelMatrix * vec4(position, 1.0);
          modelPosition.y += sin(time * speed + modelPosition.x * noise.x * 100.0) * 0.2;
          modelPosition.z += cos(time * speed + modelPosition.x * noise.y * 100.0) * 0.2;
          modelPosition.x += cos(time * speed + modelPosition.x * noise.z * 100.0) * 0.2;
          vec4 viewPosition = viewMatrix * modelPosition;
          vec4 projectionPostion = projectionMatrix * viewPosition;
          gl_Position = projectionPostion;
          gl_PointSize = size * 25. * pixelRatio;
          gl_PointSize *= (1.0 / - viewPosition.z);
          vColor = color;
          vOpacity = opacity;
        }
      `,fragmentShader:`
        varying vec3 vColor;
        varying float vOpacity;
        void main() {
          float distanceToCenter = distance(gl_PointCoord, vec2(0.5));
          float strength = 0.05 / distanceToCenter - 0.1;
          gl_FragColor = vec4(vColor, strength * vOpacity);
          #include <tonemapping_fragment>
          #include <${B>=154?"colorspace_fragment":"encodings_fragment"}>
        }
      `})}get time(){return this.uniforms.time.value}set time(t){this.uniforms.time.value=t}get pixelRatio(){return this.uniforms.pixelRatio.value}set pixelRatio(t){this.uniforms.pixelRatio.value=t}}const y=e=>e&&e.constructor===Float32Array,G=e=>[e.r,e.g,e.b],b=e=>e instanceof V||e instanceof k||e instanceof I,v=e=>Array.isArray(e)?e:b(e)?e.toArray():[e,e,e];function n(e,t,i){return r.useMemo(()=>{if(t!==void 0){if(y(t))return t;if(t instanceof g){const a=Array.from({length:e*3},()=>G(t)).flat();return Float32Array.from(a)}else if(b(t)||Array.isArray(t)){const a=Array.from({length:e*3},()=>v(t)).flat();return Float32Array.from(a)}return Float32Array.from({length:e},()=>t)}return Float32Array.from({length:e},i)},[t])}const u=r.forwardRef(({noise:e=1,count:t=100,speed:i=1,opacity:a=1,scale:m=1,size:x,color:l,children:d,...h},A)=>{r.useMemo(()=>F({SparklesImplMaterial:D}),[]);const o=r.useRef(null),P=O(c=>c.viewport.dpr),p=v(m),z=r.useMemo(()=>Float32Array.from(Array.from({length:t},()=>p.map(_.randFloatSpread)).flat()),[t,...p]),R=n(t,x,Math.random),j=n(t,a),C=n(t,i),E=n(t*3,e),M=n(l===void 0?t*3:t,y(l)?l:new g(l),()=>1);return w(c=>{o.current&&o.current.material&&(o.current.material.time=c.clock.elapsedTime)}),r.useImperativeHandle(A,()=>o.current,[]),r.createElement("points",f({key:`particle-${t}-${JSON.stringify(m)}`},h,{ref:o}),r.createElement("bufferGeometry",null,r.createElement("bufferAttribute",{attach:"attributes-position",args:[z,3]}),r.createElement("bufferAttribute",{attach:"attributes-size",args:[R,1]}),r.createElement("bufferAttribute",{attach:"attributes-opacity",args:[j,1]}),r.createElement("bufferAttribute",{attach:"attributes-speed",args:[C,1]}),r.createElement("bufferAttribute",{attach:"attributes-color",args:[M,3]}),r.createElement("bufferAttribute",{attach:"attributes-noise",args:[E,3]})),d||r.createElement("sparklesImplMaterial",{transparent:!0,pixelRatio:P,depthWrite:!1}))});function U(){return s.jsx("div",{className:"absolute inset-0 pointer-events-none",children:s.jsxs(N,{dpr:[1,1.5],gl:{antialias:!1,alpha:!0},style:{background:"transparent"},children:[s.jsx(u,{count:50,scale:10,size:2,speed:.15,opacity:.25,color:"#7c3aed"}),s.jsx(u,{count:25,scale:8,size:1.5,speed:.1,opacity:.15,color:"#06b6d4"}),s.jsx(u,{count:15,scale:6,size:1,speed:.2,opacity:.1,color:"#a78bfa"})]})})}export{U as default};
