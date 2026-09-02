const progress=document.querySelector('.progress');
window.addEventListener('scroll',()=>{const h=document.documentElement;progress.style.width=(h.scrollTop/(h.scrollHeight-h.clientHeight)*100)+'%'});

const menuBtn=document.querySelector('.menu-btn'), navLinks=document.querySelector('.nav-links');
menuBtn.addEventListener('click',()=>navLinks.classList.toggle('open'));
document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>navLinks.classList.remove('open')));

const projectData={
autonomous:{tag:'ROS2 · CARLA · REINFORCEMENT LEARNING',title:'Autonomous Driving',desc:'Developed an RL-based autonomous-navigation system using ROS2 and CARLA, integrating sensor data for real-time decision-making and vehicle control.',stack:['ROS2','CARLA','Reinforcement Learning','Sensor Fusion','Vehicle Control']},
adas:{tag:'ADAS · LiDAR · ULTRASONIC · ESP32',title:'Autonomous Blind Spot Detection',desc:'Developed a sensor-based blind-spot detection system using LiDAR and ultrasonic sensing with ESP32 alerts. Reported 70% detection accuracy.',stack:['LiDAR','Ultrasonic','ESP32','ADAS','MATLAB/Simulink']},
stimming:{tag:'HAPTICS · TEMPERATURE SENSING',title:'Temperature-Based Stimming Toy',desc:'Built an interactive cube using temperature sensing and haptic feedback, with real-time data collection for analysis.',stack:['Temperature Sensing','Haptics','Embedded Systems','Data Collection']},
glove:{tag:'VR · BLUETOOTH · HAPTICS',title:'Force-Feedback Touch-Sensing VR Glove',desc:'Developed a Bluetooth-enabled haptic glove for finger-motion tracking and sensory feedback in VR applications.',stack:['Bluetooth','Haptics','Finger Tracking','VR','Embedded Systems']},
robot:{tag:'ROBOTICS · SENSORS · NAVIGATION',title:'Remote-Controlled Collection Robot',desc:'Designed a modular robotic platform for hazardous waste collection in inaccessible areas, integrating sensor-based navigation.',stack:['Robotics','Sensors','Navigation','ESP32','Mechanical Design']},
drone:{tag:'DRONE · IMAGE PROCESSING · AGRITECH',title:'Fertilizer-Spraying Drone',desc:'Developed a remotely operated drone with adjustable-range spraying and telescope-based mechanism for precision agricultural application.',stack:['Drone','Image Processing','Precision Agriculture','Embedded Systems']}
};
const modal=document.querySelector('.modal');
document.querySelectorAll('.project-card').forEach(card=>card.addEventListener('click',e=>{
if(e.target.tagName==='BUTTON'||e.currentTarget.dataset.project){
const d=projectData[card.dataset.project];document.querySelector('.modal-tag').textContent=d.tag;document.querySelector('.modal-title').textContent=d.title;document.querySelector('.modal-desc').textContent=d.desc;document.querySelector('.modal-stack').innerHTML=d.stack.map(x=>`<span>${x}</span>`).join('');modal.classList.add('open');modal.setAttribute('aria-hidden','false');
}}));
document.querySelector('.modal-close').addEventListener('click',()=>{modal.classList.remove('open');modal.setAttribute('aria-hidden','true')});
modal.addEventListener('click',e=>{if(e.target===modal)modal.classList.remove('open')});
document.addEventListener('keydown',e=>{if(e.key==='Escape')modal.classList.remove('open')});

const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
