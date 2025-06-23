import{j as e,C as be,O as ge,S as je,L as K,T as oe,V as re,c as Ne}from"./three-68b50ee4.js";import{r as p,b as fe}from"./vendor-280e31ee.js";import{u as ve,L as J,a as ye,b as we,B as Se,R as Ce,c as W}from"./router-86ff909c.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))N(u);new MutationObserver(u=>{for(const x of u)if(x.type==="childList")for(const r of x.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&N(r)}).observe(document,{childList:!0,subtree:!0});function h(u){const x={};return u.integrity&&(x.integrity=u.integrity),u.referrerPolicy&&(x.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?x.credentials="include":u.crossOrigin==="anonymous"?x.credentials="omit":x.credentials="same-origin",x}function N(u){if(u.ep)return;u.ep=!0;const x=h(u);fetch(u.href,x)}})();const Te=()=>{const o=ve(),n=[{path:"/",label:"메인"},{path:"/education",label:"양자 컴퓨터 설명"},{path:"/circuit-builder",label:"양자회로 설계"},{path:"/templates",label:"양자 알고리즘 템플릿"},{path:"/simulation",label:"알고리즘 비교"},{path:"/bloch-studio",label:"블로흐 스튜디오"}];return e.jsx("nav",{className:"bg-white/10 backdrop-blur-md shadow-lg border border-white/20",children:e.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:e.jsxs("div",{className:"flex justify-between h-16",children:[e.jsx("div",{className:"flex items-center",children:e.jsxs(J,{to:"/",className:"flex items-center space-x-2",children:[e.jsx("span",{className:"text-2xl",children:e.jsxs("svg",{className:"w-10 h-10 text-emerald-400",fill:"currentColor",viewBox:"0 0 24 24",children:[e.jsx("circle",{cx:"12",cy:"12",r:"2"}),e.jsx("ellipse",{cx:"12",cy:"12",rx:"8",ry:"3",fill:"none",stroke:"currentColor",strokeWidth:"1"}),e.jsx("ellipse",{cx:"12",cy:"12",rx:"8",ry:"3",fill:"none",stroke:"currentColor",strokeWidth:"1",transform:"rotate(60 12 12)"}),e.jsx("ellipse",{cx:"12",cy:"12",rx:"8",ry:"3",fill:"none",stroke:"currentColor",strokeWidth:"1",transform:"rotate(120 12 12)"})]})})," "," "," "," "," ",e.jsx("span",{className:"font-bold text-xl text-gray-800",children:"Quantum Lab"})]})}),e.jsx("div",{className:"flex items-center space-x-1",children:n.map(h=>e.jsxs(J,{to:h.path,className:`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center space-x-2 ${o.pathname===h.path?"bg-emerald-500 text-white shadow-md":"text-gray-600 hover:text-emerald-600 hover:bg-emerald-50"}`,children:[e.jsx("span",{children:h.icon}),e.jsx("span",{className:"hidden sm:block",children:h.label})]},h.path))})]})})})},Me=()=>{const o=[{title:"양자컴퓨터 설명",description:"큐비트, 게이트, 대표적인 양자 알고리즘에 대해 알아보기기",icon:"📚",path:"/education",color:"bg-green-400 hover:bg-green-400"},{title:"간단하게 시작하기",description:"드래그앤드롭으로 양자 회로를 만들고 실시간으로 실행해보기기",icon:"🔧",path:"/circuit-builder",color:"bg-green-500 hover:bg-green-500"},{title:"양자 알고리즘 템플릿",description:"Grover, 양자 텔레포테이션, GHZ 상태 등의 템플릿과 비교 분석하기기",icon:"⚡",path:"/templates",color:"bg-green-600 hover:bg-purple-600"},{title:"블로흐 스튜디오",description:"3D 블로흐 구를 조작하며 양자 상태를 시각적으로 탐구하기기",icon:"🌐",path:"/bloch-studio",color:"bg-green-700 hover:bg-green-700"}];return e.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-blue-50 via-emerald-50 to-blue-100",children:[e.jsx("div",{className:"relative overflow-hidden",children:e.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24",children:e.jsxs("div",{className:"text-center",children:[e.jsx("h1",{className:"text-6xl md:text-7xl font-bold text-gray-900 mb-32 mt-32",children:e.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600",children:"Quantum Lab"})}),e.jsxs("p",{className:"text-xl md:text-2xl text-gray-600 mb-16 max-w-3xl mx-auto",children:["양자 컴퓨팅의 세계를 탐험하고, 직접 체험하며 배우는",e.jsx("br",{}),e.jsx("span",{className:"font-semibold text-green-600",children:"인터랙티브 학습 플랫폼"})]}),e.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 justify-center items-center mb-16",children:[e.jsx(J,{to:"/circuit-builder",className:"bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105",children:"지금 시작하기"}),e.jsx(J,{to:"/education",className:"border-2 border-green-600 text-green-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-200",children:"먼저 배우기"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-64 mb-16",children:[e.jsxs("div",{className:"bg-white/70 backdrop-blur-sm rounded-lg p-6 shadow-lg",children:[e.jsx("div",{className:"text-3xl mb-4",children:"🎯"}),e.jsx("h3",{className:"font-bold text-lg mb-2",children:"실시간 실행"}),e.jsx("p",{className:"text-gray-600 text-sm",children:"만든 양자 회로를 바로 실행하고 결과를 확인하세요"})]}),e.jsxs("div",{className:"bg-white/70 backdrop-blur-sm rounded-lg p-6 shadow-lg",children:[e.jsx("div",{className:"text-3xl mb-4",children:"🎨"}),e.jsx("h3",{className:"font-bold text-lg mb-2",children:"시각적 학습"}),e.jsx("p",{className:"text-gray-600 text-sm",children:"3D 블로흐 구 시뮬레이션으로 양자 상태를 시각적으로 탐구해보세요"})]}),e.jsxs("div",{className:"bg-white/70 backdrop-blur-sm rounded-lg p-6 shadow-lg",children:[e.jsx("div",{className:"text-3xl mb-4",children:"⚡"}),e.jsx("h3",{className:"font-bold text-lg mb-2",children:"알고리즘 템플릿"}),e.jsx("p",{className:"text-gray-600 text-sm",children:"유명한 양자 알고리즘들을 한 번에 체험해보세요"})]}),e.jsxs("div",{className:"bg-white/70 backdrop-blur-sm rounded-lg p-6 shadow-lg",children:[e.jsx("div",{className:"text-3xl mb-4",children:"🔬"}),e.jsx("h3",{className:"font-bold text-lg mb-2",children:"단계별 학습"}),e.jsx("p",{className:"text-gray-600 text-sm",children:"기초부터 고급까지 체계적인 학습 과정을 통해 양자 컴퓨팅을 배워보세요"})]})]})]})})}),e.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24",children:[e.jsx("h2",{className:"text-3xl font-bold text-center text-gray-900 mt-32 mb-12",children:"주요 기능들"}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8",children:o.map((n,h)=>e.jsx(J,{to:n.path,className:"group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:scale-105",children:e.jsxs("div",{className:"p-8",children:[e.jsxs("div",{className:"flex items-center mb-6",children:[e.jsx("div",{className:`w-16 h-16 ${n.color} rounded-lg flex items-center justify-center text-2xl text-white shadow-lg group-hover:scale-110 transition-transform duration-200`,children:n.icon}),e.jsx("div",{className:"ml-6",children:e.jsx("h3",{className:"text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-200",children:n.title})})]}),e.jsx("p",{className:"text-gray-600 leading-relaxed",children:n.description}),e.jsxs("div",{className:"mt-6 flex items-center text-blue-600 font-semibold group-hover:text-blue-700",children:["시작하기 ",e.jsx("span",{className:"ml-2 group-hover:translate-x-1 transition-transform duration-200",children:"→"})]})]})},h))})]}),e.jsx("div",{className:"bg-gradient-to-r from-green-600 to-blue-600 text-white mt-64",children:e.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center",children:[e.jsx("h2",{className:"text-3xl font-bold mb-4",children:"양자 컴퓨팅의 미래를 지금 경험해보세요!"}),e.jsx("p",{className:"text-xl mb-8 opacity-90",children:"복잡한 이론도 재미있고 쉽게 배울 수 있습니다"}),e.jsx(J,{to:"/circuit-builder",className:"bg-white text-blue-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-200 shadow-lg inline-block",children:"🚀 지금 바로 시작하기"})]})})]})},ke=()=>{var b;const[o,n]=p.useState("qubits"),h=[{id:"qubits",label:"큐비트",icon:"⚡",color:"from-blue-400 to-blue-600"},{id:"gates",label:"게이트",icon:"🚪",color:"from-purple-400 to-purple-600"},{id:"algorithms",label:"양자 알고리즘",icon:"🧮",color:"from-green-400 to-green-600"},{id:"quantum-mechanics",label:"양자역학",icon:"🔬",color:"from-red-400 to-red-600"}],N={title:"큐비트 (Quantum Bit)",color:"blue",sections:[{title:"🔬 큐비트란 무엇인가요?",content:"큐비트는 양자 컴퓨팅의 기본 정보 단위입니다. 일반 컴퓨터의 비트가 0 또는 1의 값만 가질 수 있는 반면, 큐비트는 0과 1의 상태를 동시에 가질 수 있습니다.",highlight:'이를 "중첩(Superposition)"이라고 합니다.',type:"basic"},{title:"🎯 중첩 (Superposition)",content:"큐비트는 |0⟩과 |1⟩ 상태의 확률적 조합으로 표현됩니다. 예를 들어, α|0⟩ + β|1⟩ 형태로 나타낼 수 있으며, 여기서 |α|² + |β|² = 1 입니다.",example:"동전을 던지는 순간을 생각해보세요. 공중에서 회전하는 동안 앞면과 뒷면이 동시에 존재하는 것과 비슷합니다.",type:"concept"},{title:"🔗 얽힘 (Entanglement)",content:"두 개 이상의 큐비트가 양자적으로 연결된 상태입니다. 한 큐비트의 측정이 다른 큐비트의 상태를 즉시 결정합니다.",highlight:'아인슈타인이 "유령 같은 원격 작용"이라고 불렀던 현상입니다.',type:"advanced"},{title:"🔒 큐비트 보존의 중요성",content:`양자정보를 보존한다는 것은 다음 세 가지를 모두 만족시키는 것을 뜻합니다:

(i) 상태가 에너지 바닥 혹은 준안정 "저소음" 준위에 머물러 T₁(에너지 수명)이 길고,
(ii) 위상이 외부 잡음에 깨지지 않아 T₂(위상수명)이 길며,
(iii) 오류가 생겨도 양자 오류 정정(QEC)이 논리적 차원에서 복구해주는 것

큐비트를 보존해야만 온전하게 사용할 수 있기 때문에 보존 기술은 매우 중요합니다.`,highlight:"큐비트의 수명이 길수록 더 복잡한 양자 연산이 가능합니다.",type:"technical"},{title:"⚗️ 큐비트 보존 방법들",content:`현재 사용되는 주요 큐비트 보존 방법들:

1. 이온 트랩: 10⁻¹¹ Torr 초고진공 환경에서 레이저 냉각과 RF/펜닝 전자기장으로 Ca⁺, Yb⁺ 등의 이온을 공간에 고정 (수명: 수 초~분)

2. 초전도 큐비트: 희귀금속 회로를 10mK 희석냉동기에 장착하고 마이크로파 펄스로 제어 (수명: 100μs)

3. 다이아몬드 NV 센터: 탄소 격자 안의 질소 공공 결함을 이용 (수명: 100ms)

4. 실리콘 양자점: 반도체 기술과 호환 가능한 전자 스핀 큐비트`,highlight:"각 방법마다 장단점이 있으며, 보존 기술의 발전이 양자컴퓨터 실용화의 핵심입니다.",type:"technical"}]},u={title:"양자 게이트 (Quantum Gates)",sections:[{title:"🚪 양자 게이트란?",content:"양자 게이트는 큐비트의 상태를 변환하는 연산입니다. 일반 컴퓨터의 논리 게이트와 유사하지만, 확률적이고 가역적이며 유니타리 행렬로 표현됩니다.",gates:[{name:"Hadamard (H)",symbol:"H",description:"큐비트를 중첩 상태로 만듭니다. |0⟩ → (|0⟩ + |1⟩)/√2, |1⟩ → (|0⟩ - |1⟩)/√2",matrix:"H = (1/√2)[[1, 1], [1, -1]]"},{name:"Pauli-X",symbol:"X",description:"큐비트를 뒤집습니다. |0⟩ ↔ |1⟩ (양자 NOT 게이트)",matrix:"X = [[0, 1], [1, 0]]"},{name:"Pauli-Y",symbol:"Y",description:"X와 Z 회전을 결합한 게이트입니다. |0⟩ → i|1⟩, |1⟩ → -i|0⟩",matrix:"Y = [[0, -i], [i, 0]]"},{name:"Pauli-Z",symbol:"Z",description:"|1⟩ 상태의 위상을 바꿉니다. |0⟩ → |0⟩, |1⟩ → -|1⟩",matrix:"Z = [[1, 0], [0, -1]]"},{name:"CNOT",symbol:"⊕",description:"조건부 NOT. 제어 큐비트가 |1⟩일 때만 타겟 큐비트를 뒤집습니다.",matrix:"CNOT = [[1,0,0,0], [0,1,0,0], [0,0,0,1], [0,0,1,0]]"}]},{title:"🎛️ 게이트의 특성",content:"모든 양자 게이트는 가역적(reversible)이며, 유니타리 행렬로 표현됩니다. 이는 정보의 손실 없이 연산을 되돌릴 수 있음을 의미합니다.",highlight:"이러한 특성 때문에 양자 컴퓨터는 에너지 효율적일 수 있습니다.",technical_note:"유니타리 조건: U† U = I (여기서 U†는 에르미트 켤레)"}]},x={title:"대표적인 양자 알고리즘",sections:[{title:"🔍 Grover 알고리즘 - 양자 검색의 마법",content:`안녕하세요! 오늘은 양자 컴퓨팅의 스타 알고리즘 중 하나인 Grover 알고리즘에 대해 알아보겠습니다.

📚 문제 상황
여러분이 1억 개의 전화번호가 무작위로 저장된 전화번호부에서 특정 사람의 번호를 찾는다고 생각해보세요. 일반적인 컴퓨터라면 최악의 경우 1억 번을 모두 확인해야 할 수도 있습니다. 평균적으로는 5천만 번 정도 확인해야 하죠.

🚀 Grover의 천재적 아이디어
Grover는 1996년에 양자역학의 중첩과 간섭 현상을 이용해 이 문제를 획기적으로 해결했습니다. 놀랍게도 1억 개 중에서 찾으려면 약 1만 번(√1억)만 확인하면 됩니다!

🔧 작동 원리
1. 모든 항목을 중첩 상태로 만듭니다 (Hadamard 게이트 사용)
2. 찾는 항목에 "음의 위상"을 표시합니다 (Oracle 함수)
3. 평균 위상을 중심으로 증폭 연산을 수행합니다 (Diffusion 연산)
4. 2-3번을 √N번 반복합니다

이 과정을 통해 찾는 항목의 확률만 점점 증폭되어 측정했을 때 원하는 답이 나올 확률이 거의 100%가 됩니다!`,advantage:"Classical: O(N) → Quantum: O(√N)",description:"데이터베이스 크기의 제곱근에 비례하는 시간만 필요합니다.",applications:["데이터베이스 검색","최적화 문제","암호 해독","기계학습","조합 최적화"],realWorld:"구글, IBM 등에서 실제 양자 컴퓨터에서 구현하여 성능을 검증했습니다."},{title:"📡 양자 텔레포테이션 - SF가 현실이 되다",content:`SF 영화에서나 보던 텔레포테이션이 양자 세계에서는 실제로 가능합니다! 물론 물질 자체를 순간이동시키는 것은 아니고, "정보"를 순간이동시키는 거예요.

🤔 그게 뭔가요?
양자 텔레포테이션은 한 장소의 양자 상태를 다른 장소로 "완벽하게" 전송하는 기술입니다. 마치 한 곳의 큐비트가 사라지면서 동시에 다른 곳에 똑같은 상태의 큐비트가 나타나는 것처럼 보입니다.

🔮 왜 특별한가요?
양자역학의 "복제 불가 정리"에 의하면 양자 상태는 완벽하게 복사할 수 없습니다. 하지만 텔레포테이션은 복사가 아니라 "이동"이기 때문에 가능합니다. 원본은 파괴되고 사본이 만들어지는 방식이죠.

🛠️ 작동 과정
1. Alice와 Bob이 얽힌 큐비트 쌍을 미리 공유합니다
2. Alice가 전송하려는 큐비트를 자신의 얽힌 큐비트와 측정합니다
3. 측정 결과를 일반 통신으로 Bob에게 알려줍니다
4. Bob이 측정 결과에 따라 자신의 큐비트에 적절한 연산을 적용합니다
5. 완성! Bob의 큐비트가 Alice의 원래 상태와 똑같아집니다

💫 흥미로운 사실
- 정보 전송 속도는 일반 통신에 의해 제한됩니다 (빛의 속도보다 빠르지 않음)
- 하지만 도청이 절대 불가능한 완벽한 보안 통신이 가능합니다!`,advantage:"Classical: 불가능 → Quantum: 가능",description:"양자 상태의 완벽한 복사 없이 정보를 전송할 수 있습니다.",applications:["양자 통신","양자 인터넷","양자 컴퓨터 연결","양자 암호","분산 양자 컴퓨팅"],realWorld:"중국이 위성을 이용해 1400km 거리에서 성공적으로 구현했습니다. 유럽에서는 양자 인터넷 구축 프로젝트가 진행 중입니다."},{title:"🔐 Shor 알고리즘 - 암호의 종말?",content:`1994년 Peter Shor가 발표한 이 알고리즘은 전 세계 암호학자들에게 충격을 주었습니다. 현재 인터넷 보안의 근간인 RSA 암호를 무력화할 수 있기 때문입니다!

💳 RSA 암호의 비밀
여러분이 온라인 쇼핑을 할 때 신용카드 정보는 RSA 암호로 보호됩니다. 이 암호의 안전성은 "큰 수의 소인수분해는 어렵다"는 수학적 사실에 기반합니다.

예를 들어, 15 = 3 × 5 는 쉽게 분해할 수 있지만, 2048비트 숫자(600자리 숫자!)의 소인수분해는 현재 컴퓨터로는 수십억 년이 걸립니다.

⚡ Shor의 혁신적 접근
Shor는 이 문제를 "주기 찾기" 문제로 바꾸고, 양자 푸리에 변환을 이용해 해결했습니다. 마치 복잡한 미로 문제를 다른 각도에서 보니 쉬운 길이 보이는 것과 같습니다!

🔄 작동 원리 (간단 버전)
1. 분해하려는 수 N과 서로소인 임의의 수 a를 선택
2. 양자 컴퓨터로 함수 f(x) = a^x mod N의 주기 r을 찾음
3. 주기 r을 이용해 N의 인수를 계산
4. 재귀적으로 완전히 소인수분해 완성

📊 성능 차이
- 고전 컴퓨터: 지수 시간 (2^n)
- 양자 컴퓨터: 다항 시간 (n³)

즉, 2048비트 RSA를 깨는데 고전 컴퓨터로는 현재 기술로 수십억 년이 걸리지만, 충분히 큰 결함 허용 양자 컴퓨터(약 수천만 개의 물리적 큐비트 필요)라면 몇 시간에서 며칠 내에 가능할 것으로 예상됩니다.

🛡️ 대응책은?
다행히 "양자 저항성 암호" 연구가 활발합니다. NIST(미국 표준기술연구소)에서는 이미 새로운 암호 표준을 발표했어요!`,advantage:"Classical: 지수 시간 → Quantum: 다항 시간",description:"RSA 암호 체계의 보안을 무력화할 수 있는 잠재력을 가지고 있습니다.",applications:["암호 해독","수학 문제 해결","보안 시스템 평가","블록체인 보안 분석"],realWorld:"구글과 IBM이 작은 숫자(15, 21 등)로 실험에 성공했습니다. 하지만 실용적인 Shor 알고리즘 구현을 위해서는 수백만 개의 물리적 큐비트가 필요하며, 현재 기술로는 아직 수십 년이 더 필요할 것으로 예상됩니다. 그럼에도 불구하고 이론적 위협 때문에 양자 저항성 암호 연구가 활발히 진행되고 있습니다."}]},r={title:"양자역학",sections:[{title:"🌟 양자역학? 그게 뭔데요?",content:`안녕하세요! 오늘은 우리 모두가 한 번쯤은 들어봤지만 정말 이해하기 어려운 "양자역학"에 대해 이야기해보려고 합니다. 😊

💭 일상 속에서 만나는 양자역학
혹시 스마트폰을 쓰면서 "이게 어떻게 작동하는 거지?"라고 생각해본 적 있나요? 놀랍게도 여러분의 스마트폰 안에는 양자역학의 원리가 숨어있답니다! 반도체, LED, 레이저... 이 모든 것들이 양자역학 없이는 존재할 수 없어요.

🔬 양자역학의 핵심 아이디어
양자역학은 아주 작은 세계(원자보다 작은 세계)에서 일어나는 일들을 설명하는 물리학입니다. 우리가 살아가는 일상적인 세계와는 완전히 다른 규칙이 적용되는 신비로운 세계예요.

예를 들어볼까요? 우리 일상에서는:
- 동전이 앞면이거나 뒷면이거나 둘 중 하나죠
- 공은 한 곳에만 존재할 수 있어요
- 측정해도 물체의 상태는 변하지 않죠

하지만 양자 세계에서는:
- 동전이 앞면이면서 동시에 뒷면일 수 있어요! (중첩상태)
- 입자가 여러 곳에 동시에 존재할 수 있어요!
- 측정하는 순간 상태가 변해버려요!

🤯 "말이 안 돼!" 싶으시죠?
맞아요! 아인슈타인도 "신은 주사위를 던지지 않는다"며 양자역학을 받아들이기 어려워했습니다. 하지만 실험 결과는 양자역학이 맞다는 것을 계속 증명하고 있어요.

이게 바로 양자 컴퓨터가 특별한 이유입니다. 이런 "이상한" 양자역학의 성질들을 이용해서 기존 컴퓨터로는 불가능한 계산을 해내는 거예요!`,highlight:"양자역학은 우리 일상과는 전혀 다른 규칙이 적용되는 미시세계의 물리학입니다!"},{title:"🧪 슈테른-게를라흐 실험 - 스핀 양자화의 발견",content:`1922년, 독일의 물리학자 오토 슈테른과 발터 게를라흐가 수행한 이 실험은 양자역학 역사상 가장 중요한 실험 중 하나예요. 마치 탐정이 범인을 찾듯이, 이들은 원자의 비밀을 파헤쳤습니다! 🔍

🎯 실험의 목적
당시 과학자들은 "전자가 작은 자석처럼 행동한다"는 걸 알고 있었어요. 하지만 이 작은 자석(전자의 스핀)이 어떤 방향을 향하고 있는지는 몰랐죠.

만약 전자가 나침반 바늘처럼 모든 방향을 가리킬 수 있다면? 🧭
→ 자기장을 통과할 때 연속적인 곡선을 그리며 퍼져야 해요

만약 전자가 특정 방향만 가리킬 수 있다면? 📍
→ 몇 개의 점으로만 나타나야 해요

⚗️ 실험 설계 (천재적 아이디어!)
1. 은(Silver) 원자를 고온으로 가열해서 원자 빔을 만듦
2. 불균등한 자기장(한쪽은 N극, 한쪽은 S극)을 통과시킴
3. 스크린에 어떻게 찍히는지 관찰

🎲 예상 결과 vs 실제 결과
클래식한 예상: 은 원자들이 자기장에 의해 다양하게 굽어져서 스크린에 세로선 모양으로 찍힐 것

충격적인 실제 결과: 딱 두 개의 점만 찍혔어요! 위쪽 하나, 아래쪽 하나!

💥 이게 왜 충격적이었나요?
이 결과는 전자의 스핀이 "위" 또는 "아래" 두 가지 상태만 가질 수 있다는 걸 의미했어요. 마치 동전이 앞면 아니면 뒷면만 있는 것처럼요!

이건 우리의 일상 경험과 완전히 달랐습니다. 나침반은 모든 방향을 가리킬 수 있는데, 전자는 왜 딱 두 방향만 가리킬까요?

🌟 양자화(Quantization)의 발견
이 실험으로 "양자화"라는 개념이 확실해졌어요. 양자 세계에서는 많은 물리량들이 연속적이지 않고 "양자화"되어 있다는 뜻이에요.

마치 계단처럼 1층, 2층, 3층은 있지만 1.5층은 없는 것과 같아요! 🏢`,highlight:"전자의 스핀은 연속적이지 않고 딱 두 가지 값만 가질 수 있어요!"},{title:"🎰 스핀 측정의 신비로운 세계",content:`이제 양자역학에서 가장 신기하고 이해하기 어려운 부분을 알아볼 차례예요. 바로 "측정"이 어떻게 양자 상태를 바꾸는지 말이에요! 🤔

🕐 양자 시계 이야기 (쉬운 비유)
일반적인 시계를 상상해보세요. 방 안에 시계가 있는데, 우리는 지금이 몇 시인지 모르는 상황이에요. 시계가 말합니다:

"시간이 궁금하면 물어봐! 알려줄게!"

일반 시계라면:
- "지금 3시야?" → "아니야, 7시야"
- 다음에 또 물어봐도 여전히 7시

하지만 양자 시계는 완전히 달라요:
- "지금 12시야?" → "아니야" (그럼 무조건 6시!)
- "지금 3시야?" → "아니야" (그럼 무조건 9시!)
- 양자 시계는 물어본 시간이거나, 정반대 시간만 가져요!

🧲 스핀 측정의 실제 모습
전자의 스핀도 이 양자 시계와 비슷해요. 방향을 정해보죠:
- 수직: 위(↑) vs 아래(↓)  
- 수평: 왼쪽(←) vs 오른쪽(→)

실험 1: 같은 방향으로 연속 측정
1차 측정: 수직 방향 → 위(↑) 나옴
2차 측정: 수직 방향 → 100% 확신으로 위(↑) 나옴

실험 2: 다른 방향으로 측정
1차 측정: 수직 방향 → 위(↑) 나옴
2차 측정: 수평 방향 → 50% 확률로 왼쪽(←), 50% 확률로 오른쪽(→)

실험 3: 측정이 상태를 바꿔버린다!
1차: 수직 → 위(↑)
2차: 수평 → 오른쪽(→)  
3차: 수직 → ???? 

😱 충격적인 결과: 3차 측정에서도 50:50 확률로 위/아래가 나와요!
2차 측정이 1차 측정 결과를 "지워버린" 거예요!

🎲 동전 던지기와의 차이점
동전 던지기:
- 겉보기에는 랜덤하지만 실제로는 물리 법칙으로 예측 가능
- 동전의 무게, 힘의 크기, 공기 저항 등을 모두 계산하면 결과 예측 가능

스핀 측정:
- 진짜로 완전히 랜덤!
- 아무리 정확한 정보를 가져도 결과 예측 불가능
- 우주의 근본적인 불확정성

🌌 하이젠베르크의 불확정성 원리
"위치와 운동량을 동시에 정확히 알 수 없다"는 유명한 원리도 이와 같은 맥락이에요. 측정 자체가 시스템을 교란하기 때문이죠!`,highlight:"양자 세계에서는 측정 행위 자체가 시스템의 상태를 바꿔버려요!"},{title:"🔤 브라-켓 표기법 - 양자역학의 언어",content:`이제 양자역학에서 사용하는 특별한 수학 언어를 배워볼 시간이에요! 폴 디랙이 만든 이 표기법은 양자역학을 훨씬 쉽게 다룰 수 있게 해줍니다. 😊

📐 벡터 복습부터!
고등학교에서 배운 벡터를 기억하시나요?
- 2차원 벡터: A = [a₁, a₂]
- 3차원 벡터: A = [a₁, a₂, a₃]
- 성분들은 모두 실수였죠!

🌈 복소수 벡터의 등장
그런데 양자역학에서는 성분이 복소수인 벡터가 필요해요!
복소수: z = a + bi (여기서 i는 √(-1))

예시:
- |ψ⟩ = [1+2i, 3-i, 2i]
- 각 성분이 복소수인 벡터!

📝 브라-켓 표기법의 기본 규칙

1. 켓(Ket): |ψ⟩
- "프사이 켓"이라고 읽어요
- 양자 상태를 나타내는 벡터
- 예: |0⟩, |1⟩, |+⟩, |-⟩

2. 브라(Bra): ⟨ψ|
- "프사이 브라"라고 읽어요  
- 켓의 켤레전치(복소켤레를 취하고 전치)
- 만약 |ψ⟩ = [a+bi, c+di]라면
- ⟨ψ| = [a-bi, c-di]

3. 브라켓(Bracket): ⟨φ|ψ⟩
- 두 상태 사이의 내적(inner product)
- 확률 진폭을 나타내요!
- |⟨φ|ψ⟩|² = φ 상태에서 ψ 상태를 측정할 확률

🎯 실제 예시로 이해하기

스핀 상태 표현:
- |↑⟩ = [1, 0] (스핀 위)
- |↓⟩ = [0, 1] (스핀 아래)
- |→⟩ = [1/√2, 1/√2] (스핀 오른쪽)
- |←⟩ = [1/√2, -1/√2] (스핀 왼쪽)

확률 계산:
⟨↑|→⟩ = [1, 0] · [1/√2, 1/√2] = 1/√2

따라서 |⟨↑|→⟩|² = (1/√2)² = 1/2 = 50%

즉, 오른쪽 스핀을 위 방향으로 측정할 확률이 50%라는 뜻!

🔗 왜 이 표기법이 중요한가요?

1. 간결함
- ⟨ψ|H|ψ⟩ 같은 복잡한 계산도 간단히 표현

2. 물리적 의미가 명확
- |ψ⟩²이 아니라 ⟨ψ|ψ⟩가 확률
- 복소수 특성을 자연스럽게 반영

3. 계산 편의성
- 양자 게이트 연산: |ψ'⟩ = U|ψ⟩
- 측정 확률: |⟨φ|ψ⟩|²

🌟 양자 컴퓨터와의 연결
브라-켓 표기법으로 양자 컴퓨터의 모든 연산을 표현할 수 있어요:
- 큐비트 상태: |0⟩, |1⟩, α|0⟩ + β|1⟩
- 양자 게이트: X|0⟩ = |1⟩
- 얽힘 상태: |00⟩ + |11⟩

이제 양자역학의 언어를 어느 정도 이해하셨나요? 🎓`,highlight:"브라-켓 표기법은 복소수 벡터를 다루는 양자역학의 핵심 도구예요!"},{title:"🌊 파동-입자 이중성 - 양자역학의 가장 신비로운 현상",content:`양자역학의 꽃이라고 할 수 있는 "파동-입자 이중성"에 대해 알아보겠습니다. 이 현상은 정말로 우리의 상식을 완전히 뒤집어놓죠! 🤯

💡 이중슬릿 실험 - 과학사상 가장 아름다운 실험

실험 준비물:
- 광원 (레이저 포인터 같은 것)
- 두 개의 슬릿(틈)이 있는 판
- 스크린

실험 1: 한 번에 하나씩 광자를 쏘기
놀랍게도 한 번에 광자를 하나씩만 쏴도 간섭무늬가 나타나요!

이게 말이 되나요? 🤷‍♀️
- 광자 하나가 어떻게 두 슬릿을 동시에 통과해서 자기 자신과 간섭하죠?
- 마치 한 사람이 동시에 두 개의 문을 통과하는 것과 같아요!

실험 2: 관찰자 효과
"도대체 광자가 어느 슬릿을 통과하는지 보자!"

슬릿 앞에 검출기를 설치하는 순간... 📹
→ 간섭무늬가 사라져버려요!
→ 광자가 입자처럼 행동하기 시작해요

🔍 관찰이 현실을 바꾼다
이 실험이 보여주는 핵심:
- 관찰하지 않을 때: 파동처럼 행동 (중첩상태)
- 관찰할 때: 입자처럼 행동 (하나의 경로)

이건 정말 철학적인 질문을 던져요:
"달을 보지 않을 때도 달이 거기 있을까?" - 아인슈타인

🌟 슈뢰딩거의 고양이 - 거시세계로의 확장
에르빈 슈뢰딩거가 양자역학의 이상함을 보여주기 위해 만든 사고실험:

실험 설정:
- 상자 안에 고양이 한 마리
- 방사성 원소 (50% 확률로 1시간 내 붕괴)
- 붕괴하면 독가스 방출 → 고양이 죽음
- 붕괴하지 않으면 → 고양이 생존

양자역학적 해석:
상자를 열기 전까지 고양이는 "살아있으면서 동시에 죽어있는" 상태!

현실과의 괴리:
우리는 이런 경험이 없죠. 고양이는 살아있거나 죽어있거나 둘 중 하나예요.

그럼 언제부터 양자역학적 중첩이 사라질까요? 🤔

🔬 데코히어런스(Decoherence) - 현실적 해답
양자 상태가 환경과 상호작용하면서 중첩상태가 빠르게 사라지는 현상:

크기별 데코히어런스 시간:
- 전자: 매우 오래 유지 가능
- 원자: 밀리초 정도
- 분자: 마이크로초 정도  
- 고양이: 거의 즉시 (10⁻²³초)

그래서 고양이는 중첩상태를 유지할 수 없어요!

⚡ 양자 컴퓨터의 도전
양자 컴퓨터가 어려운 이유:
- 큐비트를 중첩상태로 유지해야 함
- 환경의 작은 진동, 온도, 전자기파도 데코히어런스 유발
- 절대온도 근처(-273°C)에서 작동해야 함
- 완벽한 차폐와 격리 필요

🌈 파동-입자 이중성의 현대적 이해
현대 물리학에서는 "광자는 파동도 입자도 아니다"라고 봐요:
- 광자는 "양자 객체"예요
- 측정 방법에 따라 파동적 또는 입자적 성질을 보여줄 뿐
- 실체는 확률진폭이라는 복소수 함수

이게 바로 닐스 보어의 "상보성 원리"예요! 🎭`,highlight:"양자 객체는 우리가 어떻게 관찰하느냐에 따라 다른 성질을 보여줘요!"},{title:'🔗 양자 얽힘 - "유령같은 원거리 작용"',content:`아인슈타인이 "신은 주사위를 던지지 않는다"며 가장 싫어했던 양자역학의 현상을 알아봅시다. 바로 양자 얽힘(Quantum Entanglement)이에요! 👻

🎭 EPR 역설 - 아인슈타인의 도전
1935년, 아인슈타인-포돌스키-로젠이 양자역학의 불완전성을 증명하려고 만든 사고실험:

상황 설정:
두 개의 입자가 얽힌 상태로 만들어져서 우주 반대편으로 날아갔다고 해봅시다.

양자역학의 예측:
- 한 입자를 측정하는 순간
- 다른 입자의 상태가 즉시 결정됨
- 거리에 상관없이!

아인슈타인의 반박:
"이건 말이 안 돼! 빛보다 빠른 정보 전달은 불가능해!"

아인슈타인은 "숨겨진 변수"가 있을 것이라고 생각했어요. 마치 동전에 이미 앞면/뒷면이 정해져 있는 것처럼, 입자에도 미리 정해진 성질이 있을 것이라고요.

🔔 벨의 부등식 - 실험으로 결판내기
1964년 존 벨이 천재적인 아이디어를 냈어요:
"숨겨진 변수가 있다면 특정 부등식을 만족해야 한다!"

벨 테스트 실험:
1. 얽힌 광자 쌍 생성
2. 서로 다른 각도에서 편광 측정
3. 상관관계 계산

결과:
- 벨의 부등식 위반! 
- 숨겨진 변수 이론 완전히 틀림
- 양자역학이 완전히 맞음

알랭 아스페(2022년 노벨물리학상 수상자)의 실험이 결정적이었어요! 🏆

🌌 얽힘의 실제 모습
두 큐비트가 얽힌 상태를 수식으로 표현하면:
|ψ⟩ = (1/√2)(|00⟩ + |11⟩)

이게 의미하는 바:
- 50% 확률로 둘 다 |0⟩
- 50% 확률로 둘 다 |1⟩
- 하나를 측정하면 다른 하나가 즉시 결정됨

중요한 포인트:
- 정보가 전달되는 게 아니에요
- 상관관계만 즉시 나타나는 거예요
- 특수상대성이론은 여전히 유효해요

📱 얽힘의 현실적 활용

1. 양자 암호통신
- 도청하는 순간 얽힘이 깨짐
- 완벽한 보안 통신 가능
- 중국이 위성으로 실용화 중

2. 양자 컴퓨터
- 많은 큐비트를 얽어서 병렬 계산
- 지수적 성능 향상의 핵심

3. 양자 센서
- 얽힘을 이용한 초정밀 측정
- 중력파 검출기 성능 향상

🎪 얽힘 생성하는 방법들

방법 1: 자발적 매개 하향 변환
- 높은 에너지 광자 하나가 두 개의 낮은 에너지 광자로 분해
- 에너지와 운동량 보존에 의해 자동으로 얽힘 생성

방법 2: 이온 트랩
- 레이저로 이온들을 조작
- CNOT 게이트로 얽힘 생성

방법 3: 초전도 큐비트
- 조세프슨 접합을 이용
- 마이크로파로 제어

🔮 얽힘의 미래
- 양자 인터넷: 전 세계 양자 컴퓨터 연결
- 양자 클라우드: 원격으로 양자 컴퓨터 사용
- 양자 시뮬레이션: 복잡한 물리 시스템 모델링

아인슈타인이 "유령같은 원거리 작용"이라며 싫어했던 이 현상이 이제는 미래 기술의 핵심이 되었어요! 😄`,highlight:"양자 얽힘은 두 입자가 거리에 상관없이 즉시 상관관계를 보이는 현상이에요!"}]},$=(()=>{switch(o){case"qubits":return N;case"gates":return u;case"algorithms":return x;case"quantum-mechanics":return r;default:return N}})();return e.jsx("div",{className:"min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100",children:e.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[e.jsxs("div",{className:"text-center mb-12",children:[e.jsx("div",{className:"inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mb-6 shadow-lg",children:e.jsx("span",{className:"text-3xl",children:"📚"})}),e.jsx("h1",{className:"text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4",children:"양자 컴퓨터 기초 이론"}),e.jsx("p",{className:"text-xl text-gray-600 max-w-2xl mx-auto",children:"양자 컴퓨팅의 핵심 개념들을 차근차근 알아보세요"})]}),e.jsx("div",{className:"flex justify-center mb-12",children:e.jsx("div",{className:"bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-2 border border-white/20",children:e.jsx("div",{className:"flex flex-wrap justify-center gap-2",children:h.map(m=>e.jsxs("button",{onClick:()=>n(m.id),className:`px-6 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center space-x-3 min-w-max ${o===m.id?`bg-gradient-to-r ${m.color} text-white shadow-lg transform scale-105`:"text-gray-600 hover:text-gray-800 hover:bg-gray-100/50"}`,children:[e.jsx("span",{className:"text-xl",children:m.icon}),e.jsx("span",{className:"font-medium",children:m.label})]},m.id))})})}),e.jsxs("div",{className:"bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/20 overflow-hidden",children:[e.jsx("div",{className:`bg-gradient-to-r ${((b=h.find(m=>m.id===o))==null?void 0:b.color)||"from-blue-400 to-blue-600"} px-8 py-6`,children:e.jsx("h2",{className:"text-3xl font-bold text-white",children:$.title})}),e.jsxs("div",{className:"p-8",children:[e.jsx("div",{className:"space-y-10",children:$.sections.map((m,S)=>{var I;return e.jsxs("div",{className:"group",children:[e.jsx("div",{className:"bg-gradient-to-r from-transparent via-gray-100 to-transparent h-px mb-6"}),e.jsxs("div",{className:"flex items-start space-x-6",children:[e.jsx("div",{className:`flex-shrink-0 w-12 h-12 bg-gradient-to-br ${((I=h.find(q=>q.id===o))==null?void 0:I.color)||"from-blue-400 to-blue-600"} rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg`,children:S+1}),e.jsxs("div",{className:"flex-1",children:[e.jsx("h3",{className:"text-2xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors duration-200",children:m.title}),e.jsx("div",{className:"prose prose-lg max-w-none",children:e.jsx("p",{className:"text-gray-700 leading-relaxed mb-6 whitespace-pre-line text-lg",children:m.content})}),m.highlight&&e.jsx("div",{className:"bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-400 rounded-r-lg p-6 mb-6 shadow-sm",children:e.jsxs("div",{className:"flex items-start space-x-3",children:[e.jsx("span",{className:"text-2xl",children:"💡"}),e.jsx("p",{className:"text-blue-800 font-semibold text-lg",children:m.highlight})]})}),m.example&&e.jsx("div",{className:"bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-400 rounded-r-lg p-6 mb-6 shadow-sm",children:e.jsxs("div",{className:"flex items-start space-x-3",children:[e.jsx("span",{className:"text-2xl",children:"🌟"}),e.jsxs("div",{children:[e.jsx("p",{className:"text-green-800 font-semibold mb-2",children:"예시"}),e.jsx("p",{className:"text-green-700",children:m.example})]})]})}),m.gates&&e.jsx("div",{className:"mt-6 space-y-4",children:m.gates.map((q,M)=>e.jsx("div",{className:"bg-white/50 rounded-lg p-4 border border-purple-200",children:e.jsxs("div",{className:"flex items-start space-x-4",children:[e.jsx("div",{className:"w-12 h-12 bg-purple-500 text-white rounded-lg flex items-center justify-center text-xl font-bold",children:q.symbol}),e.jsxs("div",{className:"flex-1",children:[e.jsx("h4",{className:"font-bold text-purple-800",children:q.name}),e.jsx("p",{className:"text-purple-700 text-sm mt-1",children:q.description}),q.matrix&&e.jsx("div",{className:"mt-2 bg-gray-100 rounded px-3 py-2",children:e.jsx("code",{className:"text-xs text-gray-800",children:q.matrix})})]})]})},M))}),m.advantage&&e.jsxs("div",{className:"bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50 rounded-2xl p-8 mb-6 border border-purple-200 shadow-lg",children:[e.jsxs("div",{className:"flex items-center mb-4",children:[e.jsx("span",{className:"text-3xl mr-3",children:"⚡"}),e.jsx("h4",{className:"font-bold text-purple-800 text-xl",children:"성능 비교"})]}),e.jsx("p",{className:"text-purple-700 font-semibold text-lg mb-3",children:m.advantage}),e.jsx("p",{className:"text-gray-700 text-lg mb-6",children:m.description}),m.applications&&e.jsxs("div",{className:"mb-6",children:[e.jsxs("h5",{className:"font-semibold text-purple-800 mb-3 text-lg flex items-center",children:[e.jsx("span",{className:"mr-2",children:"🎯"}),"활용 분야"]}),e.jsx("div",{className:"flex flex-wrap gap-3",children:m.applications.map((q,M)=>e.jsx("span",{className:"bg-gradient-to-r from-purple-100 to-purple-200 text-purple-800 px-4 py-2 rounded-full text-sm font-medium shadow-sm hover:shadow-md transition-all duration-200 hover:scale-105",children:q},M))})]}),m.realWorld&&e.jsxs("div",{className:"bg-white/70 backdrop-blur-sm rounded-xl p-4 border border-white/50",children:[e.jsxs("h5",{className:"font-semibold text-purple-800 mb-2 flex items-center",children:[e.jsx("span",{className:"mr-2",children:"🌍"}),"실제 구현 사례"]}),e.jsx("p",{className:"text-purple-700",children:m.realWorld})]})]}),m.technical_note&&e.jsxs("div",{className:"mt-4 bg-blue-50 border border-blue-200 p-4 rounded-lg",children:[e.jsxs("div",{className:"flex items-center space-x-2 mb-2",children:[e.jsx("span",{className:"text-blue-600",children:"🧮"}),e.jsx("span",{className:"font-semibold text-blue-800",children:"기술적 참고"})]}),e.jsx("p",{className:"text-blue-700 text-sm",children:m.technical_note})]})]})]})]},S)})}),e.jsxs("div",{className:"mt-16 bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-600 rounded-3xl p-10 text-center text-white shadow-2xl relative overflow-hidden",children:[e.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-white/10 to-transparent"}),e.jsxs("div",{className:"relative z-10",children:[e.jsx("div",{className:"inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6",children:e.jsx("span",{className:"text-3xl",children:"🚀"})}),e.jsx("h3",{className:"text-3xl font-bold mb-4",children:"이제 직접 체험해보세요!"}),e.jsx("p",{className:"text-gray-600 mb-8 max-w-2xl mx-auto",children:"이론을 배웠으니 실제 양자 회로를 만들어보며 학습을 계속해보세요"}),e.jsxs("div",{className:"flex flex-col sm:flex-row gap-6 justify-center",children:[e.jsxs("a",{href:"/circuit-builder",className:"bg-white text-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-white/90 transition-all duration-200 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2",children:[e.jsx("span",{className:"text-xl",children:"🔧"}),e.jsx("span",{children:"회로 만들기"})]}),e.jsxs("a",{href:"/templates",className:"border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition-all duration-200 transform hover:scale-105 flex items-center justify-center space-x-2",children:[e.jsx("span",{className:"text-xl",children:"⚡"}),e.jsx("span",{children:"알고리즘 템플릿"})]})]})]})]})]})]})]})})},qe=()=>{const[o]=ye(),[n,h]=p.useState([]),[N,u]=p.useState(null),[x,r]=p.useState(null),[k,$]=p.useState("qiskit"),[b,m]=p.useState(""),[S,I]=p.useState(null),[q,M]=p.useState(!1),[G,H]=p.useState(!1),[F,A]=p.useState(!0),[C,_]=p.useState(!1),[D,Q]=p.useState(!1),[E,X]=p.useState(0),[z,j]=p.useState([]),[v,c]=p.useState([]),[t,g]=p.useState(!0),[f,w]=p.useState(!1),i=3,y=5,O=[{type:"H",name:"Hadamard",color:"bg-purple-500 hover:bg-purple-600",symbol:"H"},{type:"X",name:"Pauli-X",color:"bg-red-500 hover:bg-red-600",symbol:"X"},{type:"Y",name:"Pauli-Y",color:"bg-green-500 hover:bg-green-600",symbol:"Y"},{type:"Z",name:"Pauli-Z",color:"bg-blue-500 hover:bg-blue-600",symbol:"Z"},{type:"CNOT",name:"CNOT",color:"bg-orange-500 hover:bg-orange-600",symbol:"⊕"}],Z={qiskit:s=>{if(s.length===0)return`# Qiskit 양자 회로
from qiskit import QuantumCircuit, Aer, execute
from qiskit.visualization import plot_histogram

# ${i}개 큐비트 회로 생성
circuit = QuantumCircuit(${i}, ${i})

# 아직 게이트가 배치되지 않았습니다
# 왼쪽에서 게이트를 드래그해서 회로를 구성하세요!

# 측정 추가
circuit.measure_all()

# 시뮬레이션 실행
simulator = Aer.get_backend('qasm_simulator')
job = execute(circuit, simulator, shots=1024)
result = job.result()
counts = result.get_counts()

print("측정 결과:", counts)
plot_histogram(counts)`;const l=[...s].sort((d,T)=>d.step-T.step||d.qubit-T.qubit);let a=`# Qiskit 양자 회로
from qiskit import QuantumCircuit, Aer, execute
from qiskit.visualization import plot_histogram

# ${i}개 큐비트 회로 생성
circuit = QuantumCircuit(${i}, ${i})

# 게이트들 추가
`;return l.forEach((d,T)=>{if(d.type==="CNOT")a+=`circuit.cx(${d.qubit}, ${d.targetQubit})  # CNOT: Q${d.qubit} → Q${d.targetQubit}
`;else{const R=d.type.toLowerCase();a+=`circuit.${R}(${d.qubit})  # ${d.type} 게이트를 Q${d.qubit}에 적용
`}}),a+=`
# 측정 추가
circuit.measure_all()

# 회로 출력
print("생성된 회로:")
print(circuit)

# 시뮬레이션 실행
simulator = Aer.get_backend('qasm_simulator')
job = execute(circuit, simulator, shots=1024)
result = job.result()
counts = result.get_counts()

print("\\n측정 결과:", counts)
plot_histogram(counts)`,a},cirq:s=>`# Cirq 양자 회로 (시뮬레이션)
import cirq
# 간단한 Cirq 시뮬레이션 코드
print("Cirq 시뮬레이션 결과")`,javascript:s=>`// JavaScript 양자 시뮬레이터
console.log("JavaScript 시뮬레이션 결과");`,json:s=>{const l={metadata:{numQubits:i,numSteps:y,description:"드래그앤드롭으로 생성된 양자 회로",createdAt:new Date().toISOString()},gates:s.map(a=>({id:a.id,type:a.type,qubit:a.qubit,step:a.step,...a.targetQubit!==void 0&&{targetQubit:a.targetQubit}})),circuit:s.length===0?"아직 게이트가 배치되지 않았습니다":s.sort((a,d)=>a.step-d.step||a.qubit-d.qubit).map(a=>a.type==="CNOT"?`CNOT(${a.qubit}, ${a.targetQubit})`:`${a.type}(${a.qubit})`).join(" → ")};return JSON.stringify(l,null,2)}};p.useEffect(()=>{const s=o.get("template"),l=o.get("gates");if(s&&l&&!f)try{const a=JSON.parse(decodeURIComponent(l));h(a),w(!0),setTimeout(()=>{alert(`${s} 템플릿이 성공적으로 적용되었습니다! 🎉`)},500)}catch(a){console.error("템플릿 로드 오류:",a),alert("템플릿을 로드하는 중 오류가 발생했습니다.")}},[o,f]),p.useEffect(()=>{const s=Z[k](n);m(s)},[n,k]);const B=(s,l)=>{u(l),s.dataTransfer.effectAllowed="copy"},ie=(s,l,a)=>{s.preventDefault(),s.dataTransfer.dropEffect="copy",r({qubit:l,step:a})},U=s=>{s.currentTarget.contains(s.relatedTarget)||r(null)},ee=(s,l,a)=>{s.preventDefault(),N&&(N==="CNOT"?l<i-1?L("CNOT",l,a,l+1):l>0?L("CNOT",l,a,l-1):alert("CNOT 게이트는 최소 2개의 큐비트가 필요합니다!"):L(N,l,a),u(null),r(null))},L=(s,l,a,d=null)=>{if(s==="CNOT"&&d!==null){const T={id:Date.now(),type:"CNOT",qubit:l,step:a,targetQubit:d,role:"control"},R={id:Date.now()+1,type:"CNOT",qubit:d,step:a,targetQubit:l,role:"target"},P=n.filter(V=>!((V.qubit===l||V.qubit===d)&&V.step===a));h([...P,T,R])}else{const T=n.findIndex(P=>P.qubit===l&&P.step===a),R={id:Date.now(),type:s,qubit:l,step:a,targetQubit:d};if(T>=0){const P=[...n];P[T]=R,h(P)}else h([...n,R])}},te=s=>{const l=n.find(a=>a.id===s);l&&l.type==="CNOT"?h(n.filter(a=>!(a.type==="CNOT"&&a.step===l.step&&(a.qubit===l.qubit||a.qubit===l.targetQubit)))):h(n.filter(a=>a.id!==s))},se=()=>{h([]),j([]),X(0)},le=(s,l)=>n.find(a=>a.qubit===s&&a.step===l),ae=s=>n.filter(l=>l.type==="CNOT"&&l.step===s).map(l=>({control:l.qubit,target:l.targetQubit})),Y=(s,l)=>x&&x.qubit===s&&x.step===l?"bg-blue-200 border-blue-400 border-2 border-dashed":"border border-gray-300 hover:border-gray-400",ne=()=>{navigator.clipboard.writeText(b);const s=document.getElementById("copy-button"),l=s.textContent;s.textContent="복사됨!",setTimeout(()=>{s.textContent=l},2e3)},ce=async()=>{if(!b.trim()){alert("실행할 코드가 없습니다!");return}M(!0),I(null);try{const s=await fetch("http://localhost:5000/execute-quantum-code",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({code:b,language:k,step_by_step:C})}),l=await s.json();s.ok?(I({success:!0,data:l.result,raw_output:l.raw_output}),l.result.step_states&&j(l.result.step_states),H(!0),A(!0)):(I({success:!1,error:l.error||"알 수 없는 오류가 발생했습니다."}),H(!0),A(!0))}catch{I({success:!1,error:"백엔드 서버에 연결할 수 없습니다. 서버가 실행 중인지 확인하세요."}),H(!0),A(!0)}finally{M(!1)}},he=()=>{if(n.length===0){alert("먼저 회로에 게이트를 배치해주세요!");return}Q(!0),X(0),g(!0);const s=xe(de(0));c(s);const l=Math.max(...n.map(d=>d.step))+1,a=setInterval(()=>{X(d=>{const T=d+1;if(T>=l)return Q(!1),clearInterval(a),d;const R=xe(de(T));return c(R),T})},2e3)},ue=()=>{Q(!1)},de=s=>["000","001","010","011","100","101","110","111"].map(a=>{let d;if(s===0)d=a==="000"?1:0;else if(s===1)a.startsWith("0"),d=.5,a.endsWith("00")||(d=0);else if(s===2)a==="000"||a==="110"?d=.5:d=0;else{const T=a.split("").filter(R=>R==="1").length;d=Math.exp(-T*.5)/4}return{state:a,probability:Math.max(0,Math.min(1,d))}}),xe=s=>{const l=s.reduce((a,d)=>a+d.probability,0);return l<1e-10?s.map(a=>({...a,probability:1/s.length})):s.map(a=>({...a,probability:a.probability/l}))};return e.jsx("div",{className:"p-6 bg-gray-50 min-h-screen",children:e.jsxs("div",{className:"max-w-7xl mx-auto",children:[e.jsx("h1",{className:"text-3xl font-bold text-center mb-8",children:"양자 회로 빌더"}),e.jsx("p",{className:"text-center text-gray-600 mb-8",children:"게이트를 드래그앤드롭하여 양자 회로를 만들고 실시간으로 실행해보세요!"}),e.jsxs("div",{className:"grid grid-cols-1 xl:grid-cols-5 gap-6",children:[e.jsxs("div",{className:"bg-white rounded-lg shadow-lg p-6",children:[e.jsx("h2",{className:"text-xl font-bold mb-4",children:"게이트 팔레트"}),e.jsx("div",{className:"space-y-3",children:O.map(s=>e.jsx("div",{draggable:!0,onDragStart:l=>B(l,s.type),className:`
                    ${s.color} text-white p-4 rounded-lg cursor-move 
                    transition-all duration-200 transform hover:scale-105
                    select-none shadow-md
                  `,children:e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"text-2xl font-bold mb-1",children:s.symbol}),e.jsx("div",{className:"text-sm",children:s.name})]})},s.type))}),e.jsxs("div",{className:"mt-6 pt-6 border-t",children:[e.jsx("h3",{className:"text-lg font-semibold mb-3",children:"느린 재생 모드"}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("label",{className:"flex items-center space-x-2",children:[e.jsx("input",{type:"checkbox",checked:C,onChange:s=>_(s.target.checked),className:"rounded"}),e.jsx("span",{className:"text-sm",children:"단계별 상태 추적"})]}),z.length>0&&e.jsxs("div",{className:"space-y-2",children:[D?e.jsx("button",{onClick:ue,className:"w-full bg-red-500 text-white py-2 rounded hover:bg-red-600 text-sm",children:"⏹️ 재생 중지"}):e.jsx("button",{onClick:he,className:"w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 text-sm",children:"▶️ 느린 재생 시작"}),n.length>0&&e.jsxs("div",{className:"text-xs text-gray-600",children:["단계: ",D?E+1:0," / ",Math.max(...n.map(s=>s.step),0)+1]}),D&&v.length>0&&e.jsx("div",{className:"mt-3",children:e.jsxs("button",{onClick:()=>g(!t),className:`w-full py-2 px-3 rounded text-sm transition-colors ${t?"bg-purple-500 text-white hover:bg-purple-600":"bg-gray-200 text-gray-700 hover:bg-gray-300"}`,children:["📊 ",t?"그래프 숨기기":"그래프 보기"]})})]})]})]})]}),e.jsxs("div",{className:"xl:col-span-2 bg-white rounded-lg shadow-lg p-6",children:[e.jsxs("div",{className:"flex justify-between items-center mb-6",children:[e.jsx("h2",{className:"text-xl font-bold",children:"양자 회로"}),e.jsx("button",{onClick:se,className:"bg-green-500 text-white px-4 py-2 rounded hover:bg-red-600",children:"초기화"})]}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("div",{className:"inline-block min-w-full",children:[e.jsxs("div",{className:"flex mb-2",children:[e.jsx("div",{className:"w-16"}),Array.from({length:y},(s,l)=>e.jsxs("div",{className:"w-20 text-center text-sm font-medium",children:["Step ",l+1]},l))]}),Array.from({length:i},(s,l)=>e.jsxs("div",{className:"flex items-center mb-3 relative",children:[e.jsxs("div",{className:"w-16 text-right pr-4 font-medium",children:["Q",l,":"]}),Array.from({length:y},(a,d)=>{const T=le(l,d),R=ae(d);return e.jsxs("div",{className:`w-20 h-16 mx-1 rounded-lg flex items-center justify-center relative
                            ${Y(l,d)} transition-all duration-200`,onDragOver:P=>ie(P,l,d),onDragLeave:U,onDrop:P=>ee(P,l,d),children:[R.map((P,V)=>{if(P.control===l||P.target===l){const me=Math.abs(P.target-P.control)*64+32,pe=P.control===l?32:-me+32;return e.jsx("div",{className:"absolute bg-orange-400 pointer-events-none",style:{width:"3px",height:`${me}px`,left:"50%",top:`${pe}px`,transform:"translateX(-50%)",zIndex:1}},V)}return null}),T&&e.jsx("div",{onClick:()=>te(T.id),className:`w-12 h-12 rounded-lg flex items-center justify-center
                                cursor-pointer text-white font-bold text-lg
                                transition-transform hover:scale-110 relative z-10
                                ${T.type==="H"?"bg-purple-500":T.type==="X"?"bg-red-500":T.type==="Y"?"bg-green-500":T.type==="Z"?"bg-blue-500":"bg-orange-500"}`,children:T.type==="CNOT"?T.role==="control"?"●":"⊕":T.type}),!T&&e.jsx("div",{className:"text-gray-400 text-sm",children:"Drop"})]},d)})]},l))]})}),D&&v.length>0&&t&&e.jsxs("div",{className:"mt-6 bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200 rounded-lg p-6",children:[e.jsxs("div",{className:"flex justify-between items-center mb-4",children:[e.jsxs("h3",{className:"font-semibold text-purple-800",children:["🎯 실시간 확률분포 변화 (단계: ",E+1,")"]}),e.jsx("button",{onClick:()=>g(!1),className:"text-purple-600 hover:text-purple-800 text-lg font-bold",title:"확률분포 그래프 숨기기",children:"✕"})]}),e.jsx("div",{className:"space-y-3",children:v.map((s,l)=>{const a=(s.probability*100).toFixed(1),d=s.probability*100;return e.jsxs("div",{className:"flex items-center",children:[e.jsxs("div",{className:"w-12 text-sm font-mono text-gray-700",children:["|",s.state,"⟩"]}),e.jsxs("div",{className:"flex-1 mx-3 relative",children:[e.jsx("div",{className:"w-full bg-gray-200 rounded-full h-6",children:e.jsx("div",{className:`h-6 rounded-full transition-all duration-1000 flex items-center justify-end pr-2
                                ${d>15?"bg-gradient-to-r from-blue-400 to-purple-500":"bg-blue-400"}`,style:{width:`${Math.max(d,2)}%`},children:d>15&&e.jsxs("span",{className:"text-white text-xs font-bold",children:[a,"%"]})})}),d<=15&&e.jsxs("span",{className:"absolute right-0 top-0 text-xs text-gray-600 -mr-12 mt-1",children:[a,"%"]})]})]},l)})}),e.jsx("div",{className:"mt-4 text-sm text-purple-700 text-center",children:"양자 상태가 실시간으로 변변화하고 있습니다"})]}),D&&v.length>0&&!t&&e.jsx("div",{className:"mt-6 text-center",children:e.jsx("button",{onClick:()=>g(!0),className:"bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition-colors",children:"확률분포 그래프 보기"})})]}),e.jsxs("div",{className:"xl:col-span-2 bg-white rounded-lg shadow-lg p-6",children:[e.jsxs("div",{className:"flex justify-between items-center mb-4",children:[e.jsx("h2",{className:"text-xl font-bold",children:"실시간 생성 코드"}),e.jsxs("div",{className:"flex items-center space-x-3",children:[e.jsxs("select",{value:k,onChange:s=>$(s.target.value),className:"border rounded px-3 py-1 text-sm",children:[e.jsx("option",{value:"qiskit",children:"Qiskit(Python)"}),e.jsx("option",{value:"cirq",children:"Cirq(Python)"}),e.jsx("option",{value:"javascript",children:"JavaScript"}),e.jsx("option",{value:"json",children:"JSON 데이터"})]}),e.jsx("button",{id:"copy-button",onClick:ne,className:"bg-blue-500 text-white px-3 py-1 rounded text-sm hover:bg-blue-600",children:"복사"}),e.jsx("button",{onClick:ce,disabled:q||!b.trim(),className:`px-3 py-1 rounded text-sm transition-all duration-200 ${q?"bg-gray-400 text-white cursor-not-allowed":b.trim()?"bg-green-500 text-white hover:bg-green-600":"bg-gray-300 text-gray-500 cursor-not-allowed"}`,children:q?"실행 중...":"실행"})]})]}),e.jsxs("div",{className:"relative",children:[e.jsx("pre",{className:"bg-gray-900 text-green-400 p-4 rounded-lg text-sm overflow-auto h-96 font-mono",children:e.jsx("code",{children:b})}),e.jsx("div",{className:"absolute top-2 right-2",children:e.jsx("div",{className:"bg-green-500 w-3 h-3 rounded-full animate-pulse"})})]}),e.jsx("div",{className:"mt-8 text-lg font-bold text-gray-600",children:"게이트를 배치할 때마다 코드가 실시간으로 업데이트됩니다!"})]}),G&&S&&e.jsx("div",{className:"xl:col-span-5 bg-white rounded-lg shadow-lg",children:F?e.jsxs("div",{className:"p-6",children:[e.jsxs("div",{className:"flex justify-between items-center mb-4",children:[e.jsx("h3",{className:"text-xl font-bold",children:S.success?"✅ 실행 결과":"❌ 실행 오류"}),e.jsx("button",{onClick:()=>A(!1),className:"text-gray-500 hover:text-gray-700",title:"결과 최소화",children:"➖ 접기"})]}),S.success?e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[S.data.measurement_results&&e.jsxs("div",{children:[e.jsx("h4",{className:"text-lg font-semibold mb-3",children:"📊 측정 결과"}),e.jsx("div",{className:"grid grid-cols-2 gap-3",children:Object.entries(S.data.measurement_results).map(([s,l])=>e.jsxs("div",{className:"bg-blue-50 p-3 rounded-lg",children:[e.jsxs("div",{className:"text-lg font-bold text-blue-600",children:["|",s,"⟩"]}),e.jsxs("div",{className:"text-sm text-gray-600",children:[l,"회 (",(l/S.data.total_shots*100).toFixed(1),"%)"]}),e.jsx("div",{className:"mt-2 bg-blue-200 rounded-full h-2",children:e.jsx("div",{className:"bg-blue-500 h-2 rounded-full transition-all duration-500",style:{width:`${l/S.data.total_shots*100}%`}})})]},s))})]}),S.data.charts&&e.jsxs("div",{children:[e.jsx("h4",{className:"text-lg font-semibold mb-3",children:"📈 시각화"}),S.data.charts.histogram&&e.jsxs("div",{className:"mb-4",children:[e.jsx("h5",{className:"font-medium mb-2",children:"막대 그래프"}),e.jsx("img",{src:S.data.charts.histogram,alt:"측정 결과 히스토그램",className:"w-full rounded-lg border"})]}),S.data.charts.bloch&&e.jsxs("div",{children:[e.jsx("h5",{className:"font-medium mb-2",children:"블로흐 구"}),e.jsx("img",{src:S.data.charts.bloch,alt:"블로흐 구 시각화",className:"w-full rounded-lg border"})]})]})]}):e.jsx("div",{className:"bg-red-50 border border-red-200 rounded-lg p-4",children:e.jsx("pre",{className:"text-red-700 text-sm whitespace-pre-wrap",children:S.error})})]}):e.jsx("div",{className:"p-4 bg-gray-50 border-t border-gray-200",children:e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx("span",{className:"text-sm text-gray-600",children:S.success?"✅ 실행 완료":"❌ 실행 실패"}),e.jsx("span",{className:"text-xs bg-gray-200 px-2 py-1 rounded",children:S.success?"결과 확인 가능":"오류 확인 필요"})]}),e.jsx("button",{onClick:()=>A(!0),className:"bg-blue-500 text-white px-3 py-1 rounded text-sm hover:bg-blue-600",children:"결과 보기"})]})})})]}),e.jsxs("div",{className:"mt-8 bg-white rounded-lg shadow-lg p-6",children:[e.jsx("h3",{className:"text-lg font-bold mb-4",children:"회로 통계"}),e.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-4 text-center",children:[e.jsxs("div",{className:"bg-purple-100 p-3 rounded",children:[e.jsx("div",{className:"text-2xl font-bold text-purple-600",children:n.length}),e.jsx("div",{className:"text-sm text-purple-800",children:"총 게이트 수"})]}),e.jsxs("div",{className:"bg-blue-100 p-3 rounded",children:[e.jsx("div",{className:"text-2xl font-bold text-blue-600",children:Math.max(...n.map(s=>s.step+1),0)}),e.jsx("div",{className:"text-sm text-blue-800",children:"회로 깊이"})]}),e.jsxs("div",{className:"bg-green-100 p-3 rounded",children:[e.jsx("div",{className:"text-2xl font-bold text-green-600",children:b.split(`
`).length}),e.jsx("div",{className:"text-sm text-green-800",children:"생성 코드 라인"})]}),e.jsxs("div",{className:"bg-yellow-100 p-3 rounded",children:[e.jsx("div",{className:"text-2xl font-bold text-yellow-400",children:n.filter(s=>s.type==="CNOT").length}),e.jsx("div",{className:"text-sm text-yellow-800",children:"얽힘 게이트"})]})]})]})]})})},Pe=()=>{const[o,n]=p.useState(null),h=we(),N=[{id:"grover",name:"Grover 알고리즘 (2-큐비트)",description:"데이터베이스 검색을 O(√N)으로 가속화",icon:"🔍",advantage:"Classical: O(N) → Quantum: O(√N)",explanation:"정렬되지 않은 데이터베이스에서 특정 항목을 찾는 알고리즘입니다. 이 예제는 |11⟩ 상태를 찾는 2-큐비트 버전입니다. 실제 구현에서는 오라클 함수가 더 복잡하게 구성됩니다.",gates:[{type:"H",qubit:0,step:0},{type:"H",qubit:1,step:0},{type:"CNOT",qubit:0,step:1,targetQubit:1},{type:"Z",qubit:1,step:1},{type:"CNOT",qubit:0,step:1,targetQubit:1},{type:"H",qubit:0,step:2},{type:"H",qubit:1,step:2},{type:"X",qubit:0,step:3},{type:"X",qubit:1,step:3},{type:"CNOT",qubit:0,step:4,targetQubit:1},{type:"Z",qubit:1,step:4},{type:"CNOT",qubit:0,step:4,targetQubit:1},{type:"X",qubit:0,step:5},{type:"X",qubit:1,step:5},{type:"H",qubit:0,step:6},{type:"H",qubit:1,step:6}],comparison:{classical:"N개 항목 중 하나를 찾으려면 평균적으로 N/2번의 검색이 필요",quantum:"√N번의 검색만으로 충분하므로 큰 데이터베이스에서 엄청난 가속 효과"},scientific_note:"⚠️ 참고: 실제 그로버 오라클은 더 복잡한 다중 제어 게이트로 구현됩니다. 이 템플릿은 교육 목적으로 단순화된 버전입니다."},{id:"teleportation",name:"양자 텔레포테이션",description:"양자 상태를 원거리로 전송",icon:"📡",advantage:"Classical: 불가능 → Quantum: 가능",explanation:"양자 상태를 물리적으로 이동시키지 않고 다른 위치로 전송하는 프로토콜입니다.",gates:[{type:"H",qubit:1,step:0},{type:"CNOT",qubit:1,step:1,targetQubit:2},{type:"CNOT",qubit:0,step:2,targetQubit:1},{type:"H",qubit:0,step:3}],comparison:{classical:"양자 상태의 완벽한 복사는 양자역학 법칙상 불가능",quantum:"얽힘과 고전 통신을 이용해 양자 상태를 완벽하게 전송 가능"}},{id:"ghz",name:"GHZ 상태",description:"3-큐비트 최대 얽힘 상태 생성",icon:"🔗",advantage:"Classical: 독립적 상관관계만 가능 → Quantum: 완전한 얽힘",explanation:"3개의 큐비트가 최대로 얽힌 상태를 생성합니다. |000⟩ + |111⟩ 형태의 상태입니다.",gates:[{type:"H",qubit:0,step:0},{type:"CNOT",qubit:0,step:1,targetQubit:1},{type:"CNOT",qubit:1,step:2,targetQubit:2}],comparison:{classical:"세 개의 동전이 독립적으로 상관관계를 가질 수 있지만 완전한 동기화는 불가능",quantum:"세 큐비트가 완전히 얽혀서 하나의 측정이 나머지 모든 큐비트의 상태를 결정"}},{id:"deutsch",name:"Deutsch 알고리즘",description:"함수의 상수/균형 성질을 한 번에 판별",icon:"🎯",advantage:"Classical: 2번 함수 호출 → Quantum: 1번 함수 호출",explanation:"블랙박스 함수가 상수함수인지 균형함수인지를 단 한 번의 함수 호출로 알아내는 최초의 양자 알고리즘입니다.",gates:[{type:"X",qubit:1,step:0},{type:"H",qubit:0,step:1},{type:"H",qubit:1,step:1},{type:"H",qubit:0,step:3}],comparison:{classical:"함수 f의 성질을 알려면 f(0)과 f(1)을 모두 계산해야 함",quantum:"양자 중첩을 이용해 f(0)과 f(1)을 동시에 계산하여 한 번에 판별 가능"}},{id:"simon",name:"Simon 알고리즘",description:"숨겨진 주기성을 지수적으로 빠르게 발견",icon:"🔄",advantage:"Classical: O(2^(n/2)) → Quantum: O(n)",explanation:"함수의 숨겨진 주기 구조를 찾는 알고리즘으로, Shor 알고리즘의 전신이 되었습니다.",gates:[{type:"H",qubit:0,step:0},{type:"H",qubit:1,step:0},{type:"CNOT",qubit:0,step:2,targetQubit:2},{type:"CNOT",qubit:1,step:2,targetQubit:2},{type:"H",qubit:0,step:3},{type:"H",qubit:1,step:3}],comparison:{classical:"2^n개의 입력을 모두 확인해야 숨겨진 패턴을 찾을 수 있음",quantum:"양자 간섭을 이용해 O(n)번의 측정만으로 숨겨진 주기를 발견"}},{id:"shor",name:"Shor 알고리즘 (간소화)",description:"소인수분해를 다항시간에 해결",icon:"🔐",advantage:"Classical: O(exp(n^(1/3))) → Quantum: O(n³)",explanation:"큰 수의 소인수분해를 다항시간에 해결하여 RSA 암호를 무력화할 수 있는 혁명적인 알고리즘입니다. 이는 핵심 요소만 보여주는 간소화된 버전입니다.",gates:[{type:"H",qubit:0,step:0},{type:"H",qubit:1,step:0},{type:"X",qubit:2,step:1},{type:"CNOT",qubit:0,step:2,targetQubit:2},{type:"CNOT",qubit:1,step:3,targetQubit:2},{type:"H",qubit:0,step:4},{type:"H",qubit:1,step:4}],comparison:{classical:"2048비트 수의 소인수분해에 수십억 년이 소요됨",quantum:"양자 푸리에 변환을 이용해 주기 찾기 문제로 변환하여 몇 시간 내에 해결 가능"}}],u=x=>{const r=[];let k=1;x.gates.forEach(b=>{if(b.type==="CNOT"){const m={id:k++,type:"CNOT",qubit:b.qubit,step:b.step,targetQubit:b.targetQubit,role:"control"},S={id:k++,type:"CNOT",qubit:b.targetQubit,step:b.step,targetQubit:b.qubit,role:"target"};r.push(m,S)}else r.push({id:k++,type:b.type,qubit:b.qubit,step:b.step})});const $=encodeURIComponent(JSON.stringify(r));h(`/circuit-builder?template=${x.id}&gates=${$}`)};return e.jsx("div",{className:"min-h-screen bg-gray-50 py-8",children:e.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[e.jsxs("div",{className:"text-center mb-12",children:[e.jsx("h1",{className:"text-4xl font-bold text-gray-900 mb-4",children:"양자 알고리즘 템플릿"}),e.jsx("p",{className:"text-lg text-gray-600 mb-6",children:"유명한 양자 알고리즘들을 한 번에 체험하고 고전 컴퓨터와 비교해보세요"}),e.jsx("div",{className:"flex justify-center",children:e.jsxs("a",{href:"/simulation",className:"bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-3 rounded-xl font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-200 transform hover:scale-105 shadow-lg flex items-center space-x-2",children:[e.jsx("span",{className:"text-xl",children:"⚡"}),e.jsx("span",{children:"실시간 성능 비교 시뮬레이션"})]})})]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8 mb-12",children:N.map(x=>e.jsx("div",{className:"bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden",children:e.jsxs("div",{className:"p-8",children:[e.jsx("div",{className:"text-4xl mb-4 text-center",children:x.icon}),e.jsx("h3",{className:"text-xl font-bold text-gray-900 mb-3 text-center",children:x.name}),e.jsx("p",{className:"text-gray-600 mb-4 text-center text-sm",children:x.description}),e.jsxs("div",{className:"bg-gradient-to-r from-blue-200 to-emerald-450 rounded-lg p-4 mb-4",children:[e.jsx("h4",{className:"font-semibold text-blue-800 mb-2",children:" 성능 비교"}),e.jsx("p",{className:"text-blue-700 text-sm font-medium",children:x.advantage})]}),e.jsxs("div",{className:"flex gap-2 mb-4",children:[e.jsx("button",{onClick:()=>n(x),className:"flex-1 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors text-sm",children:"📖 자세히 보기"}),e.jsx("button",{onClick:()=>u(x),className:"flex-1 bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition-colors text-sm",children:"🚀 적용하기"})]})]})},x.id))}),o&&e.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50",children:e.jsx("div",{className:"bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto",children:e.jsxs("div",{className:"p-8",children:[e.jsxs("div",{className:"flex justify-between items-center mb-6",children:[e.jsxs("h2",{className:"text-2xl font-bold text-gray-900",children:[o.icon," ",o.name]}),e.jsx("button",{onClick:()=>n(null),className:"text-gray-500 hover:text-gray-700 text-2xl",children:"✕"})]}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-8",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"📋 알고리즘 설명"}),e.jsx("p",{className:"text-gray-600 mb-6",children:o.explanation}),e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"⚡ 성능 우위"}),e.jsx("div",{className:"bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-4 mb-6",children:e.jsx("p",{className:"text-purple-700 font-medium mb-2",children:o.advantage})}),e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"🔍 비교 분석"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"bg-red-50 border border-red-200 rounded-lg p-4",children:[e.jsx("h4",{className:"font-medium text-red-800 mb-2",children:"🖥️ 고전 컴퓨터"}),e.jsx("p",{className:"text-red-700 text-sm",children:o.comparison.classical})]}),e.jsxs("div",{className:"bg-green-50 border border-green-200 rounded-lg p-4",children:[e.jsx("h4",{className:"font-medium text-green-800 mb-2",children:"⚛️ 양자 컴퓨터"}),e.jsx("p",{className:"text-green-700 text-sm",children:o.comparison.quantum})]})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"🔧 회로 구성"}),e.jsxs("div",{className:"bg-gray-50 rounded-lg p-4 mb-6",children:[e.jsxs("div",{className:"text-center text-gray-600 mb-4",children:[o.gates.length,"개 게이트로 구성된 회로"]}),e.jsx("div",{className:"space-y-4 relative",children:[0,1,2].map(x=>e.jsxs("div",{className:"flex items-center relative",children:[e.jsxs("div",{className:"w-12 text-sm font-medium",children:["Q",x,":"]}),e.jsxs("div",{className:"flex-1 border-t-2 border-gray-400 relative h-8",children:[o.gates.filter(r=>r.qubit===x).map((r,k)=>{if(r.type==="CNOT"){const $=r.qubit===x;return e.jsx("div",{className:"absolute w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold bg-orange-500",style:{left:`${r.step*60+10}px`,top:"-16px"},children:$?"●":"⊕"},k)}else return e.jsx("div",{className:`absolute w-8 h-8 rounded flex items-center justify-center text-white text-xs font-bold
                                          ${r.type==="H"?"bg-purple-500":r.type==="X"?"bg-red-500":r.type==="Y"?"bg-green-500":r.type==="Z"?"bg-blue-500":"bg-gray-500"}`,style:{left:`${r.step*60+10}px`,top:"-16px"},children:r.type},k)}),o.gates.filter(r=>r.type==="CNOT").map((r,k)=>{if(r.qubit===x||r.targetQubit===x){const $=r.qubit,b=r.targetQubit,m=Math.min($,b),S=Math.max($,b);if(x===m){const I=(S-m)*32;return e.jsx("div",{className:"absolute bg-orange-400",style:{left:`${r.step*60+10+16}px`,top:"0px",width:"2px",height:`${I+16}px`,zIndex:1}},`line-${k}`)}}return null}),o.gates.filter(r=>r.type==="CNOT"&&r.targetQubit===x).map((r,k)=>e.jsx("div",{className:"absolute w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold bg-orange-500",style:{left:`${r.step*60+10}px`,top:"-16px",zIndex:2},children:"⊕"},`target-${k}`))]})]},x))})]}),e.jsx("button",{onClick:()=>u(o),className:"w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 px-6 rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-200 font-semibold",children:"🚀 회로 빌더에서 실행하기"})]})]})]})})}),e.jsxs("div",{className:"bg-white rounded-xl shadow-lg p-8 mb-8",children:[e.jsx("h2",{className:"text-2xl font-bold text-gray-900 mb-6 text-center",children:"🎓 학습 경로 추천"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:[e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4",children:e.jsx("span",{className:"text-2xl",children:"1️⃣"})}),e.jsx("h3",{className:"font-semibold mb-2",children:"기초 학습"}),e.jsx("p",{className:"text-sm text-gray-600",children:"양자컴퓨터 설명 페이지에서 기본 개념 익히기"})]}),e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4",children:e.jsx("span",{className:"text-2xl",children:"2️⃣"})}),e.jsx("h3",{className:"font-semibold mb-2",children:"실습"}),e.jsx("p",{className:"text-sm text-gray-600",children:"템플릿을 사용해서 유명한 알고리즘들 체험하기"})]}),e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4",children:e.jsx("span",{className:"text-2xl",children:"3️⃣"})}),e.jsx("h3",{className:"font-semibold mb-2",children:"창작"}),e.jsx("p",{className:"text-sm text-gray-600",children:"직접 회로를 설계하고 블로흐 스튜디오에서 탐구하기"})]})]})]})]})})},Oe=()=>{const[o,n]=p.useState("grover"),[h,N]=p.useState(!1),[u,x]=p.useState({}),[r,k]=p.useState(16);p.useState(64);const[$,b]=p.useState(-1),[m,S]=p.useState(11),[I,q]=p.useState(!1),[M,G]=p.useState(!1),[H,F]=p.useState([]),[A,C]=p.useState(""),_=()=>Array.from({length:r},(j,v)=>({id:v,value:Math.floor(Math.random()*100)+1,isTarget:v===m,isSearched:!1,isFound:!1})),[D,Q]=p.useState(_());p.useEffect(()=>{const j=Math.floor(Math.random()*r);S(j),Q(_()),z()},[r]);const E=async()=>{N(!0),q(!1),G(!1),F([]);const j=Array.from({length:r},(i,y)=>({id:y,value:Math.floor(Math.random()*100)+1,isTarget:y===m,isSearched:!1,isFound:!1}));Q(j),C("🎯 미션: 특별한 보물 상자를 찾아라! (상자 "+m+"번)"),await new Promise(i=>setTimeout(i,2e3)),C("📖 고전 방법: 하나씩 차근차근 열어보기"),await new Promise(i=>setTimeout(i,1500));let v=0;for(let i=0;i<r;i++){b(i),v++;const y=[...j];if(y[i]={...y[i],isSearched:!0},Q(y),F(O=>[...O,{type:"classical",step:v,index:i}]),C(`🔍 ${v}번째 시도: ${i}번 상자를 열어봤어요...`),await new Promise(O=>setTimeout(O,300)),i===m){y[i]={...y[i],isFound:!0},Q(y),q(!0),C(`🎉 찾았다! ${v}번 만에 보물을 발견했어요!`);break}}await new Promise(i=>setTimeout(i,2e3));const c=Array.from({length:r},(i,y)=>({id:y,value:Math.floor(Math.random()*100)+1,isTarget:y===m,isSearched:!1,isFound:!1}));Q(c),b(-1),C("⚡ 양자 방법: 마법처럼 한 번에 여러 상자를 확인!"),await new Promise(i=>setTimeout(i,2e3));const t=Math.ceil(Math.sqrt(r));C("1️⃣ 모든 상자를 동시에 열어볼 준비를 해요 (양자 중첩상태)");const g=c.map(i=>({...i,isSearched:!0,opacity:.5}));Q(g),await new Promise(i=>setTimeout(i,2e3));for(let i=1;i<=t;i++){C(`${i+1}️⃣ 그로버 반복 ${i}번째: 오라클로 표시하고, 디퓨전으로 증폭!`);const y=g.map(O=>({...O,opacity:O.isTarget?Math.min(1,.3+i*.3):Math.max(.2,.5-i*.1)}));Q(y),await new Promise(O=>setTimeout(O,1500))}C("3️⃣ 양자 측정으로 답을 확인해요! (확률적 붕괴)"),await new Promise(i=>setTimeout(i,1e3));const f=c.map(i=>({...i,isFound:i.isTarget,isSearched:i.isTarget}));Q(f),G(!0),C(`🎯 성공! 그로버 알고리즘은 약 ${t}번만에 답을 찾았어요!`);const w={classicalSteps:v,quantumSteps:t,speedup:v/t,classicalTime:v*.3,quantumTime:t*1.5,databaseSize:r};x(w),N(!1)},X=async()=>{N(!0);const j=15;C(`🔢 미션: 숫자 ${j}을 두 개의 소수로 나누어보세요!`),await new Promise(t=>setTimeout(t,2e3)),C("🖥️ 고전 방법: 2부터 시작해서 하나씩 나눠보기"),await new Promise(t=>setTimeout(t,1500));let v=0;for(let t=2;t<=Math.sqrt(j);t++)if(v++,C(`${v}번째 시도: ${j} ÷ ${t} = ?`),await new Promise(g=>setTimeout(g,800)),j%t===0){const g=j/t;C(`🎉 찾았다! ${j} = ${t} × ${g}`);break}else C(`❌ ${t}로는 나누어떨어지지 않아요...`),await new Promise(g=>setTimeout(g,500));await new Promise(t=>setTimeout(t,3e3)),C("⚛️ 양자 방법: 쇼어 알고리즘의 양자 푸리에 변환!"),await new Promise(t=>setTimeout(t,1500)),C("1️⃣ 모든 가능한 지수를 양자 중첩으로 준비해요"),await new Promise(t=>setTimeout(t,2e3)),C("2️⃣ 모듈러 지수함수의 주기성을 양자적으로 계산해요"),await new Promise(t=>setTimeout(t,2e3)),C("3️⃣ 양자 푸리에 변환(QFT)으로 숨겨진 주기를 찾아요!"),await new Promise(t=>setTimeout(t,2e3)),C("4️⃣ 주기에서 유클리드 호제법으로 소인수를 계산해요!"),await new Promise(t=>setTimeout(t,2e3)),C("🎯 결과: 15 = 3 × 5 (양자 알고리즘으로 지수적 가속!)");const c={classicalAttempts:v,quantumAttempts:1,secretNumber:j,factors:[3,5],speedup:v/1,quantumNote:"실제로는 양자 푸리에 변환과 모듈러 지수연산이 핵심입니다."};x(c),N(!1)},z=()=>{x({}),N(!1),b(-1),q(!1),G(!1),F([]),C(""),Q(_())};return e.jsx("div",{className:"min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-blue-100",children:e.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[e.jsxs("div",{className:"text-center mb-12",children:[e.jsx("div",{className:"inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full mb-6 shadow-lg",children:e.jsx("span",{className:"text-3xl",children:"🚀"})}),e.jsx("h1",{className:"text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4",children:"알고리즘 대결 시뮬레이션"}),e.jsx("p",{className:"text-xl text-gray-600 max-w-3xl mx-auto",children:"양자 알고리즘 vs 고전 알고리즘! 누가 더 빠를까요? 직접 확인해보세요! 🏁"})]}),A&&e.jsx("div",{className:"mb-8 bg-gradient-to-r from-yellow-400 to-orange-400 text-white p-6 rounded-2xl text-center shadow-lg",children:e.jsx("h3",{className:"text-2xl font-bold",children:A})}),e.jsx("div",{className:"flex justify-center mb-12",children:e.jsx("div",{className:"bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-2 border border-white/20",children:e.jsxs("div",{className:"flex gap-2",children:[e.jsxs("button",{onClick:()=>{n("grover"),z()},className:`px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center space-x-3 ${o==="grover"?"bg-gradient-to-r from-green-400 to-green-600 text-white shadow-lg transform scale-105":"text-gray-600 hover:text-gray-800 hover:bg-gray-100/50"}`,children:[e.jsx("span",{className:"text-xl",children:"🎯"}),e.jsx("span",{children:"보물찾기 대결"})]}),e.jsxs("button",{onClick:()=>{n("shor"),z()},className:`px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center space-x-3 ${o==="shor"?"bg-gradient-to-r from-red-400 to-red-600 text-white shadow-lg transform scale-105":"text-gray-600 hover:text-gray-800 hover:bg-gray-100/50"}`,children:[e.jsx("span",{className:"text-xl",children:"🔢"}),e.jsx("span",{children:"수학 문제 대결"})]})]})})}),o==="grover"&&e.jsxs("div",{className:"bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/20 p-8 mb-8",children:[e.jsxs("div",{className:"text-center mb-8",children:[e.jsx("h2",{className:"text-3xl font-bold text-gray-800 mb-4",children:"🎯 보물찾기 대결: 그로버 vs 하나씩 찾기"}),e.jsx("p",{className:"text-gray-600 text-lg",children:"숨겨진 보물 상자를 찾는 두 가지 방법을 비교해보세요!"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8 mb-8",children:[e.jsxs("div",{className:"bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6",children:[e.jsxs("h3",{className:"text-xl font-bold text-blue-800 mb-4 flex items-center",children:[e.jsx("span",{className:"mr-2",children:"🎮"}),"게임 설정"]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsxs("label",{className:"block text-blue-700 font-medium mb-2",children:["상자 개수: ",r,"개"]}),e.jsx("input",{type:"range",min:"4",max:"64",step:"4",value:r,onChange:j=>k(parseInt(j.target.value)),className:"w-full h-3 bg-blue-200 rounded-lg appearance-none cursor-pointer",disabled:h})]}),e.jsxs("div",{className:"text-sm text-blue-600 bg-blue-100 p-3 rounded-lg",children:[e.jsxs("p",{children:[e.jsx("strong",{children:"고전 방법:"})," 평균 ",Math.floor(r/2),"번 확인"]}),e.jsxs("p",{children:[e.jsx("strong",{children:"그로버 방법:"})," 약 ",Math.ceil(Math.sqrt(r)),"번 확인"]}),e.jsxs("p",{children:[e.jsx("strong",{children:"예상 가속:"})," ",(r/2/Math.ceil(Math.sqrt(r))).toFixed(1),"배 빨라요!"]})]})]})]}),e.jsxs("div",{className:"bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6",children:[e.jsxs("h3",{className:"text-xl font-bold text-green-800 mb-4 flex items-center",children:[e.jsx("span",{className:"mr-2",children:"🏆"}),"결과 현황"]}),u.classicalSteps&&u.quantumSteps?e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("span",{className:"text-green-700",children:"고전 방법:"}),e.jsxs("span",{className:"font-bold text-green-800",children:[u.classicalSteps,"번"]})]}),e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("span",{className:"text-green-700",children:"그로버 방법:"}),e.jsxs("span",{className:"font-bold text-green-800",children:[u.quantumSteps,"번"]})]}),e.jsxs("div",{className:"flex justify-between items-center border-t pt-2",children:[e.jsx("span",{className:"text-green-700",children:"승부 결과:"}),e.jsxs("span",{className:"font-bold text-green-800 text-lg",children:["그로버가 ",u.speedup.toFixed(1),"배 승리! 🎉"]})]})]}):e.jsxs("div",{className:"text-center text-green-600",children:[e.jsx("p",{className:"text-4xl mb-2",children:"🎯"}),e.jsx("p",{children:"게임을 시작해보세요!"})]})]})]}),e.jsxs("div",{className:"mb-8",children:[e.jsxs("h3",{className:"text-xl font-bold text-gray-800 mb-4 text-center",children:["📦 보물 상자들 (목표: ",m,"번 상자의 보물!)"]}),e.jsx("div",{className:"grid grid-cols-8 gap-2 max-w-4xl mx-auto",children:D.map((j,v)=>e.jsxs("div",{className:`
                      relative w-12 h-12 rounded-lg border-2 flex items-center justify-center font-bold text-sm
                      transition-all duration-500 transform
                      ${j.isFound?"bg-yellow-400 border-yellow-500 shadow-lg scale-110 animate-pulse":j.isSearched?"bg-blue-100 border-blue-300":"bg-gray-100 border-gray-300"}
                      ${$===v?"ring-4 ring-red-400 scale-110":""}
                    `,style:{opacity:j.opacity||1},children:[j.isFound?"💎":j.isSearched?"📭":"📦",e.jsx("span",{className:"absolute -bottom-6 text-xs text-gray-600",children:v})]},v))})]}),H.length>0&&e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8 mb-8",children:[e.jsxs("div",{className:"bg-red-50 rounded-2xl p-6 border border-red-200",children:[e.jsxs("h4",{className:"text-xl font-bold text-red-800 mb-4 flex items-center",children:[e.jsx("span",{className:"mr-2",children:"🖥️"}),"고전 방법 진행상황"]}),e.jsx("div",{className:"space-y-2",children:H.filter(j=>j.type==="classical").slice(-5).map((j,v)=>e.jsxs("div",{className:"flex justify-between items-center text-sm",children:[e.jsxs("span",{children:["시도 ",j.step,":"]}),e.jsxs("span",{className:j.index===m?"text-green-600 font-bold":"",children:[j.index,"번 상자 ",j.index===m?"✅":"❌"]})]},v))})]}),e.jsxs("div",{className:"bg-blue-50 rounded-2xl p-6 border border-blue-200",children:[e.jsxs("h4",{className:"text-xl font-bold text-blue-800 mb-4 flex items-center",children:[e.jsx("span",{className:"mr-2",children:"⚛️"}),"그로버 방법 상태"]}),e.jsx("div",{className:"text-center",children:M?e.jsxs("div",{className:"text-blue-800",children:[e.jsx("div",{className:"text-4xl mb-2",children:"🎉"}),e.jsx("p",{className:"font-bold",children:"성공!"}),e.jsx("p",{className:"text-sm",children:"양자 중첩과 간섭으로 한 번에 찾았어요!"})]}):e.jsxs("div",{className:"text-blue-600",children:[e.jsx("div",{className:"text-4xl mb-2",children:"⚛️"}),e.jsx("p",{children:"양자 상태로 탐색 중..."})]})})]})]}),e.jsx("div",{className:"text-center",children:e.jsx("button",{onClick:E,disabled:h,className:`px-8 py-4 rounded-xl font-bold text-lg transition-all duration-200 ${h?"bg-gray-400 text-gray-600 cursor-not-allowed":"bg-gradient-to-r from-green-500 to-blue-500 text-white hover:from-green-600 hover:to-blue-600 transform hover:scale-105 shadow-lg"}`,children:h?"게임 진행 중... 🎮":"🚀 보물찾기 대결 시작!"})})]}),o==="shor"&&e.jsxs("div",{className:"bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/20 p-8 mb-8",children:[e.jsxs("div",{className:"text-center mb-8",children:[e.jsx("h2",{className:"text-3xl font-bold text-gray-800 mb-4",children:"🔢 수학 문제 대결: 쇼어 vs 하나씩 나누기"}),e.jsx("p",{className:"text-gray-600 text-lg",children:"숫자를 소수로 나누는 두 가지 방법을 비교해보세요!"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8 mb-8",children:[e.jsxs("div",{className:"bg-gradient-to-br from-red-50 to-pink-50 rounded-2xl p-6",children:[e.jsxs("h3",{className:"text-xl font-bold text-red-800 mb-4 flex items-center",children:[e.jsx("span",{className:"mr-2",children:"🧮"}),"수학 문제"]}),e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"text-6xl font-bold text-red-600 mb-4",children:"15"}),e.jsx("p",{className:"text-red-700 text-lg mb-4",children:"이 숫자를 두 개의 소수로 나누어보세요!"}),e.jsxs("div",{className:"bg-red-100 p-4 rounded-lg text-sm text-red-600",children:[e.jsxs("p",{children:[e.jsx("strong",{children:"힌트:"})," 소수는 1과 자기 자신으로만 나누어떨어지는 수예요"]}),e.jsx("p",{children:"예: 2, 3, 5, 7, 11, 13..."})]})]})]}),e.jsxs("div",{className:"bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-6",children:[e.jsxs("h3",{className:"text-xl font-bold text-purple-800 mb-4 flex items-center",children:[e.jsx("span",{className:"mr-2",children:"🏆"}),"결과 비교"]}),u.classicalAttempts&&u.quantumAttempts?e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"bg-red-100 p-3 rounded-lg",children:[e.jsx("p",{className:"font-semibold text-red-800",children:"고전 방법"}),e.jsxs("p",{className:"text-red-600",children:[u.classicalAttempts,"번 시도"]}),e.jsx("p",{className:"text-sm text-red-500",children:"하나씩 나누어보기"})]}),e.jsxs("div",{className:"bg-blue-100 p-3 rounded-lg",children:[e.jsx("p",{className:"font-semibold text-blue-800",children:"쇼어 알고리즘"}),e.jsxs("p",{className:"text-blue-600",children:[u.quantumAttempts,"번 시도"]}),e.jsx("p",{className:"text-sm text-blue-500",children:"양자 마법 사용!"})]}),e.jsxs("div",{className:"bg-green-100 p-3 rounded-lg text-center",children:[e.jsxs("p",{className:"font-bold text-green-800 text-lg",children:["답: ",u.secretNumber," = ",u.factors[0]," × ",u.factors[1]]}),e.jsxs("p",{className:"text-green-600",children:["쇼어가 ",u.speedup,"배 빨라요! 🎉"]})]})]}):e.jsxs("div",{className:"text-center text-purple-600",children:[e.jsx("p",{className:"text-4xl mb-2",children:"🔢"}),e.jsx("p",{children:"수학 대결을 시작해보세요!"})]})]})]}),e.jsxs("div",{className:"mb-8",children:[e.jsx("h3",{className:"text-xl font-bold text-gray-800 mb-4 text-center",children:"📚 단계별 설명"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-red-50 border border-red-200 rounded-xl p-6",children:[e.jsxs("h4",{className:"font-bold text-red-800 mb-3 flex items-center",children:[e.jsx("span",{className:"mr-2",children:"🖥️"}),"고전 방법"]}),e.jsxs("div",{className:"space-y-2 text-sm text-red-700",children:[e.jsx("p",{children:"1. 2로 나누어보기: 15 ÷ 2 = 7.5 ❌"}),e.jsx("p",{children:"2. 3으로 나누어보기: 15 ÷ 3 = 5 ✅"}),e.jsx("p",{children:"3. 답 발견: 15 = 3 × 5"}),e.jsx("p",{className:"text-red-500 font-medium",children:"총 2번의 시도 필요"})]})]}),e.jsxs("div",{className:"bg-blue-50 border border-blue-200 rounded-xl p-6",children:[e.jsxs("h4",{className:"font-bold text-blue-800 mb-3 flex items-center",children:[e.jsx("span",{className:"mr-2",children:"⚛️"}),"쇼어 알고리즘"]}),e.jsxs("div",{className:"space-y-2 text-sm text-blue-700",children:[e.jsx("p",{children:"1. 모든 수를 동시에 고려 (중첩상태)"}),e.jsx("p",{children:"2. 특별한 패턴(주기) 찾기"}),e.jsx("p",{children:"3. 양자 푸리에 변환으로 답 도출"}),e.jsx("p",{className:"text-blue-500 font-medium",children:"총 1번의 시도로 완료!"})]})]})]})]}),e.jsx("div",{className:"bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-8",children:e.jsxs("div",{className:"flex items-start space-x-3",children:[e.jsx("span",{className:"text-2xl",children:"💡"}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-bold text-yellow-800 mb-2",children:"왜 이게 중요할까요?"}),e.jsx("p",{className:"text-yellow-700 mb-2",children:"인터넷 쇼핑이나 온라인 뱅킹에서 사용하는 보안(RSA 암호)이 바로 이런 수학 문제에 기반해요!"}),e.jsx("p",{className:"text-yellow-600 text-sm",children:"현재는 매우 큰 숫자(2048자리!)를 사용해서 안전하지만, 쇼어 알고리즘이 완성되면 새로운 보안 방법이 필요해질 거예요."})]})]})}),e.jsx("div",{className:"text-center",children:e.jsx("button",{onClick:X,disabled:h,className:`px-8 py-4 rounded-xl font-bold text-lg transition-all duration-200 ${h?"bg-gray-400 text-gray-600 cursor-not-allowed":"bg-gradient-to-r from-red-500 to-purple-500 text-white hover:from-red-600 hover:to-purple-600 transform hover:scale-105 shadow-lg"}`,children:h?"수학 대결 진행 중... 🧮":"🔢 수학 문제 대결 시작!"})})]}),e.jsxs("div",{className:"bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/20 p-8",children:[e.jsx("h2",{className:"text-3xl font-bold text-gray-800 mb-8 text-center",children:"🎓 배운 내용 정리"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8",children:[e.jsxs("div",{className:"bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6",children:[e.jsxs("h3",{className:"text-xl font-bold text-green-800 mb-4 flex items-center",children:[e.jsx("span",{className:"mr-2",children:"🎯"}),"그로버 알고리즘"]}),e.jsxs("div",{className:"space-y-3 text-green-700",children:[e.jsxs("p",{children:[e.jsx("strong",{children:"🔍 무엇을 하나요?"})," 정렬되지 않은 데이터에서 원하는 것을 빠르게 찾아요"]}),e.jsxs("p",{children:[e.jsx("strong",{children:"⚡ 얼마나 빨라요?"})," 일반 방법보다 √N배 빨라요"]}),e.jsxs("p",{children:[e.jsx("strong",{children:"🌟 비밀은?"})," 양자 중첩으로 여러 가지를 동시에 확인해요"]}),e.jsxs("p",{children:[e.jsx("strong",{children:"🏃‍♂️ 예시:"})," 1만 개 중에서 찾기 → 100번이면 충분!"]})]})]}),e.jsxs("div",{className:"bg-gradient-to-br from-red-50 to-pink-50 rounded-2xl p-6",children:[e.jsxs("h3",{className:"text-xl font-bold text-red-800 mb-4 flex items-center",children:[e.jsx("span",{className:"mr-2",children:"🔐"}),"쇼어 알고리즘"]}),e.jsxs("div",{className:"space-y-3 text-red-700",children:[e.jsxs("p",{children:[e.jsx("strong",{children:"🔢 무엇을 하나요?"})," 큰 숫자를 소수들의 곱으로 나누어요"]}),e.jsxs("p",{children:[e.jsx("strong",{children:"⚡ 얼마나 빨라요?"})," 지수적으로 빨라져서 거의 마법 수준!"]}),e.jsxs("p",{children:[e.jsx("strong",{children:"🌟 비밀은?"})," 양자 푸리에 변환으로 숨겨진 패턴을 찾아요"]}),e.jsxs("p",{children:[e.jsx("strong",{children:"💻 영향:"})," 현재 인터넷 보안 시스템을 바꿀 수도 있어요"]})]})]})]}),e.jsxs("div",{className:"mt-8 text-center bg-gradient-to-r from-purple-100 to-blue-100 rounded-2xl p-6",children:[e.jsx("h4",{className:"text-xl font-bold text-purple-800 mb-3",children:"🚀 결론"}),e.jsx("p",{className:"text-purple-700 text-lg",children:"양자 컴퓨터는 특별한 문제들을 매우 빠르게 해결할 수 있어요! 미래에는 새로운 약 개발, 날씨 예측, 인공지능 등 많은 분야에서 도움이 될 거예요."})]})]})]})})},$e=({theta:o,phi:n})=>{const h=p.useRef(),N=Math.sin(o)*Math.cos(n),u=Math.sin(o)*Math.sin(n),x=Math.cos(o),r=[new re(0,0,0),new re(N,u,x)];return e.jsxs("group",{ref:h,children:[e.jsx(K,{points:r,color:"red",lineWidth:5}),e.jsxs("mesh",{position:[N,u,x],children:[e.jsx("sphereGeometry",{args:[.05]}),e.jsx("meshBasicMaterial",{color:"red"})]})]})},Qe=({theta:o,phi:n,showTrajectory:h,trajectory:N})=>e.jsxs(e.Fragment,{children:[e.jsx(je,{args:[1,32,32],children:e.jsx("meshBasicMaterial",{color:"lightblue",transparent:!0,opacity:.2})}),e.jsx(K,{points:[[-1.2,0,0],[1.2,0,0]],color:"black",lineWidth:2}),e.jsx(K,{points:[[0,-1.2,0],[0,1.2,0]],color:"black",lineWidth:2}),e.jsx(K,{points:[[0,0,-1.2],[0,0,1.2]],color:"black",lineWidth:2}),e.jsx(oe,{position:[1.3,0,0],fontSize:.1,color:"black",children:"X"}),e.jsx(oe,{position:[0,1.3,0],fontSize:.1,color:"black",children:"Y"}),e.jsx(oe,{position:[0,0,1.3],fontSize:.1,color:"black",children:"Z"}),e.jsx($e,{theta:o,phi:n}),h&&N.length>1&&e.jsx(K,{points:N,color:"orange",lineWidth:3}),e.jsxs("mesh",{rotation:[Math.PI/2,0,0],children:[e.jsx("torusGeometry",{args:[1,.01,16,100]}),e.jsx("meshBasicMaterial",{color:"gray"})]})]}),Ie=()=>{const[o,n]=p.useState(Math.PI/2),[h,N]=p.useState(0),[u,x]=p.useState(!1),[r,k]=p.useState(""),[$,b]=p.useState([]),[m,S]=p.useState(!1),[I,q]=p.useState(1);class M{constructor(t,g){this.real=t,this.imag=g}magnitude(){return Math.sqrt(this.real*this.real+this.imag*this.imag)}add(t){return new M(this.real+t.real,this.imag+t.imag)}multiply(t){return typeof t=="number"?new M(this.real*t,this.imag*t):new M(this.real*t.real-this.imag*t.imag,this.real*t.imag+this.imag*t.real)}toString(){return Math.abs(this.imag)<1e-10?Math.abs(this.real)<1e-10?"0":this.real.toFixed(3):Math.abs(this.real)<1e-10?this.imag>0?`${this.imag.toFixed(3)}i`:`-${Math.abs(this.imag).toFixed(3)}i`:this.imag>=0?`${this.real.toFixed(3)} + ${this.imag.toFixed(3)}i`:`${this.real.toFixed(3)} - ${Math.abs(this.imag).toFixed(3)}i`}}const G=(c,t)=>{const g=c.magnitude()**2+t.magnitude()**2;if(Math.abs(g-1)>1e-10){const B=Math.sqrt(g);c=c.multiply(1/B),t=t.multiply(1/B)}const f=2*(c.real*t.real+c.imag*t.imag),w=2*(t.imag*c.real-c.imag*t.real),i=c.magnitude()**2-t.magnitude()**2,y=Math.sqrt(f*f+w*w+i*i),O=y>1e-10?Math.acos(Math.max(-1,Math.min(1,i/y))):0;let Z=Math.atan2(w,f);return Z<0&&(Z+=2*Math.PI),{theta:O,phi:Z}},H=(c,t)=>{const g=new M(Math.cos(c/2),0),f=new M(Math.sin(c/2)*Math.cos(t),Math.sin(c/2)*Math.sin(t));return{alpha:g,beta:f}},F=c=>{const{alpha:t,beta:g}=H(o,h);let f,w;switch(c){case"H":f=t.add(g).multiply(1/Math.sqrt(2)),w=t.add(g.multiply(-1)).multiply(1/Math.sqrt(2));break;case"X":f=g,w=t;break;case"Y":f=g.multiply(new M(0,-1)),w=t.multiply(new M(0,1));break;case"Z":f=t,w=g.multiply(-1);break;case"S":f=t,w=g.multiply(new M(0,1));break;case"T":f=t;const U=new M(Math.cos(Math.PI/4),Math.sin(Math.PI/4));w=g.multiply(U);break;case"RX":const ee=Math.PI/4,L=Math.cos(ee/2),te=Math.sin(ee/2);f=t.multiply(L).add(g.multiply(new M(0,-te))),w=t.multiply(new M(0,-te)).add(g.multiply(L));break;case"RY":const se=Math.PI/4,le=Math.cos(se/2),ae=Math.sin(se/2);f=t.multiply(le).add(g.multiply(-ae)),w=t.multiply(ae).add(g.multiply(le));break;case"RZ":const Y=Math.PI/4,ne=new M(Math.cos(-Y/2),Math.sin(-Y/2)),ce=new M(Math.cos(Y/2),Math.sin(Y/2));f=t.multiply(ne),w=g.multiply(ce);break;default:f=t,w=g}const i=Math.sqrt(f.magnitude()**2+w.magnitude()**2);i>1e-10&&(f=f.multiply(1/i),w=w.multiply(1/i));const{theta:y,phi:O}=G(f,w);n(y),N(O);const Z=Math.sin(y)*Math.cos(O),B=Math.sin(y)*Math.sin(O),ie=Math.cos(y);b(U=>[...U,new re(Z,B,ie)])},A=()=>{if(!r.trim())return;const c=r.toUpperCase().split(/[\s,]+/).filter(i=>i);b([]),x(!0);const t=Math.sin(o)*Math.cos(h),g=Math.sin(o)*Math.sin(h),f=Math.cos(o);b([new re(t,g,f)]);let w=0;c.forEach((i,y)=>{setTimeout(()=>{F(i),y===c.length-1&&x(!1)},w),w+=1e3/I})},C=()=>{n(0),N(0),b([])},_=()=>{n(Math.PI),N(0),b([])},D=()=>{n(Math.PI/2),N(0),b([])},Q=()=>{n(Math.PI/2),N(Math.PI),b([])},E=()=>{n(Math.PI/2),N(Math.PI/2),b([])},X=()=>{n(Math.PI/2),N(3*Math.PI/2),b([])},z=()=>{b([])},j=Math.cos(o/2)**2,v=Math.sin(o/2)**2;return e.jsx("div",{className:"min-h-screen bg-gray-50 py-8",children:e.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[e.jsxs("div",{className:"text-center mb-8",children:[e.jsx("h1",{className:"text-4xl font-bold text-gray-900 mb-4",children:"🌐 블로흐 스튜디오"}),e.jsx("p",{className:"text-lg text-gray-600",children:"3D 블로흐 구를 조작하며 양자 상태를 시각적으로 탐구해보세요"})]}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-8",children:[e.jsxs("div",{className:"lg:col-span-2 bg-white rounded-lg shadow-lg p-6",children:[e.jsx("h2",{className:"text-xl font-bold mb-4",children:"🎮 3D 블로흐 구"}),e.jsx("div",{className:"h-96 border rounded-lg overflow-hidden",children:e.jsxs(be,{camera:{position:[3,3,3],fov:60},children:[e.jsx("ambientLight",{intensity:.6}),e.jsx("pointLight",{position:[10,10,10]}),e.jsx(Qe,{theta:o,phi:h,showTrajectory:m,trajectory:$}),e.jsx(ge,{})]})}),e.jsxs("div",{className:"mt-4 flex items-center justify-between",children:[e.jsxs("label",{className:"flex items-center space-x-2",children:[e.jsx("input",{type:"checkbox",checked:m,onChange:c=>S(c.target.checked),className:"rounded"}),e.jsx("span",{className:"text-sm",children:"궤적 표시"})]}),e.jsx("button",{onClick:z,className:"bg-gray-500 text-white px-3 py-1 rounded text-sm hover:bg-gray-600",children:"궤적 지우기"})]})]}),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"bg-white rounded-lg shadow-lg p-6",children:[e.jsx("h3",{className:"text-lg font-bold mb-4",children:"🎛️ 각도 조절"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsxs("label",{className:"block text-sm font-medium mb-2",children:["θ (Theta): ",(o*180/Math.PI).toFixed(1),"°"]}),e.jsx("input",{type:"range",min:"0",max:Math.PI,step:"0.01",value:o,onChange:c=>n(parseFloat(c.target.value)),className:"w-full"})]}),e.jsxs("div",{children:[e.jsxs("label",{className:"block text-sm font-medium mb-2",children:["φ (Phi): ",(h*180/Math.PI).toFixed(1),"°"]}),e.jsx("input",{type:"range",min:"0",max:2*Math.PI,step:"0.01",value:h,onChange:c=>N(parseFloat(c.target.value)),className:"w-full"})]})]}),e.jsxs("div",{className:"mt-4 grid grid-cols-3 gap-2 text-xs",children:[e.jsx("button",{onClick:C,className:"bg-blue-500 text-white py-1 px-2 rounded hover:bg-blue-600",children:"|0⟩"}),e.jsx("button",{onClick:_,className:"bg-red-500 text-white py-1 px-2 rounded hover:bg-red-600",children:"|1⟩"}),e.jsx("button",{onClick:D,className:"bg-green-500 text-white py-1 px-2 rounded hover:bg-green-600",children:"|+⟩"}),e.jsx("button",{onClick:Q,className:"bg-purple-500 text-white py-1 px-2 rounded hover:bg-purple-600",children:"|-⟩"}),e.jsx("button",{onClick:E,className:"bg-orange-500 text-white py-1 px-2 rounded hover:bg-orange-600",children:"|+i⟩"}),e.jsx("button",{onClick:X,className:"bg-pink-500 text-white py-1 px-2 rounded hover:bg-pink-600",children:"|-i⟩"})]})]}),e.jsxs("div",{className:"bg-white rounded-lg shadow-lg p-6",children:[e.jsx("h3",{className:"text-lg font-bold mb-4",children:"🚪 양자 게이트"}),e.jsx("div",{className:"grid grid-cols-3 gap-2 mb-4",children:["H","X","Y","Z","S","T","RX","RY","RZ"].map(c=>e.jsx("button",{onClick:()=>F(c),className:`py-2 px-3 rounded font-bold text-white text-sm ${c==="H"?"bg-purple-500 hover:bg-purple-600":c==="X"?"bg-red-500 hover:bg-red-600":c==="Y"?"bg-green-500 hover:bg-green-600":c==="Z"?"bg-blue-500 hover:bg-blue-600":c==="S"?"bg-indigo-500 hover:bg-indigo-600":c==="T"?"bg-yellow-600 hover:bg-yellow-700":c==="RX"?"bg-pink-500 hover:bg-pink-600":c==="RY"?"bg-teal-500 hover:bg-teal-600":c==="RZ"?"bg-cyan-500 hover:bg-cyan-600":"bg-gray-500 hover:bg-gray-600"}`,children:c},c))})]}),e.jsxs("div",{className:"bg-white rounded-lg shadow-lg p-6",children:[e.jsx("h3",{className:"text-lg font-bold mb-4",children:"⚡ 게이트 시퀀스"}),e.jsx("textarea",{value:r,onChange:c=>k(c.target.value),placeholder:"예: H X Z H",className:"w-full border rounded p-2 text-sm mb-4",rows:"3"}),e.jsxs("div",{className:"flex items-center gap-2 mb-4",children:[e.jsx("label",{className:"text-sm",children:"속도:"}),e.jsx("input",{type:"range",min:"0.5",max:"3",step:"0.1",value:I,onChange:c=>q(parseFloat(c.target.value)),className:"flex-1"}),e.jsxs("span",{className:"text-sm",children:[I,"x"]})]}),e.jsx("button",{onClick:A,disabled:u,className:`w-full py-2 rounded font-semibold ${u?"bg-gray-400 text-white cursor-not-allowed":"bg-blue-500 text-white hover:bg-blue-600"}`,children:u?"실행 중...":"🎬 애니메이션 실행"})]}),e.jsxs("div",{className:"bg-white rounded-lg shadow-lg p-6",children:[e.jsx("h3",{className:"text-lg font-bold mb-4",children:"📊 양자 상태 정보"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold mb-2",children:"확률 분포"}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("span",{children:"P(|0⟩):"}),e.jsx("span",{className:"font-mono",children:j.toFixed(4)})]}),e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("span",{children:"P(|1⟩):"}),e.jsx("span",{className:"font-mono",children:v.toFixed(4)})]})]})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold mb-2",children:"블로흐 구 좌표"}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("span",{children:"θ (theta):"}),e.jsxs("span",{className:"font-mono",children:[(o*180/Math.PI).toFixed(1),"°"]})]}),e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("span",{children:"φ (phi):"}),e.jsxs("span",{className:"font-mono",children:[(h*180/Math.PI).toFixed(1),"°"]})]})]})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold mb-2",children:"상태 벡터 (근사)"}),e.jsx("div",{className:"bg-gray-100 rounded p-3",children:e.jsx("div",{className:"font-mono text-sm",children:(()=>{const{alpha:c,beta:t}=H(o,h),g=c.magnitude()>.001?c.toString():"0",f=t.magnitude()>.001?t.toString():"0",w=t.real>=0&&t.imag>=0||t.real>=0&&Math.abs(t.imag)<1e-10?"+ ":"";return e.jsxs("div",{children:[e.jsxs("div",{children:["|ψ⟩ = ",g,"|0⟩"]}),e.jsxs("div",{className:"ml-8",children:[w,f,"|1⟩"]})]})})()})})]}),e.jsxs("div",{className:"text-xs text-gray-600 bg-yellow-50 p-3 rounded",children:[e.jsx("strong",{children:"블로흐 구 원리:"})," 단일 큐비트의 모든 가능한 양자 상태를 3차원 구 표면에 표현합니다.",e.jsx("br",{}),"• ",e.jsx("strong",{children:"극축(Z):"})," |0⟩(북극) ↔ |1⟩(남극)",e.jsx("br",{}),"• ",e.jsx("strong",{children:"적도(XY):"})," 중첩 상태들 |+⟩, |-⟩, |+i⟩, |-i⟩",e.jsx("br",{}),"• ",e.jsx("strong",{children:"블로흐 벡터:"})," r⃗ = (⟨σx⟩, ⟨σy⟩, ⟨σz⟩)로 계산됩니다."]})]})]})]})]}),e.jsxs("div",{className:"mt-8 bg-white rounded-lg shadow-lg p-6",children:[e.jsx("h3",{className:"text-lg font-bold mb-4",children:"💡 사용법"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm",children:[e.jsxs("div",{className:"bg-blue-50 p-4 rounded",children:[e.jsx("h4",{className:"font-semibold mb-2",children:"🎛️ 슬라이더"}),e.jsx("p",{children:"θ와 φ 슬라이더로 블로흐 벡터를 직접 조작할 수 있습니다."})]}),e.jsxs("div",{className:"bg-green-50 p-4 rounded",children:[e.jsx("h4",{className:"font-semibold mb-2",children:"🚪 양자 게이트"}),e.jsxs("p",{children:[e.jsx("strong",{children:"Pauli 게이트:"})," X, Y, Z - 블로흐 구의 각 축 주위로 π 회전"]}),e.jsxs("p",{children:[e.jsx("strong",{children:"회전 게이트:"})," RX, RY, RZ - 각 축 주위로 π/4 회전"]}),e.jsxs("p",{children:[e.jsx("strong",{children:"기타:"})," H(Hadamard), S, T - 특수한 유니타리 변환"]})]}),e.jsxs("div",{className:"bg-purple-50 p-4 rounded",children:[e.jsx("h4",{className:"font-semibold mb-2",children:"⚡ 시퀀스"}),e.jsx("p",{children:"여러 게이트를 연속으로 실행하는 애니메이션을 볼 수 있습니다."})]}),e.jsxs("div",{className:"bg-orange-50 p-4 rounded",children:[e.jsx("h4",{className:"font-semibold mb-2",children:"🎮 3D 조작"}),e.jsx("p",{children:"마우스로 블로흐 구를 회전하고 확대/축소할 수 있습니다."})]})]})]})]})})},Re=()=>e.jsx(Se,{children:e.jsxs("div",{className:"min-h-screen bg-gray-50",children:[e.jsx(Te,{}),e.jsxs(Ce,{children:[e.jsx(W,{path:"/",element:e.jsx(Me,{})}),e.jsx(W,{path:"/education",element:e.jsx(ke,{})}),e.jsx(W,{path:"/circuit-builder",element:e.jsx(qe,{})}),e.jsx(W,{path:"/templates",element:e.jsx(Pe,{})}),e.jsx(W,{path:"/simulation",element:e.jsx(Oe,{})}),e.jsx(W,{path:"/bloch-studio",element:e.jsx(Ie,{})})]})]})});Ne.createRoot(document.getElementById("root")).render(e.jsx(fe.StrictMode,{children:e.jsx(Re,{})}));
