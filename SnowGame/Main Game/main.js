const goggles = document.querySelector('.carBtn1');
const gogglesBar = document.getElementById('hidden1');

goggles.addEventListener('click', function()
{
  gogglesBar.style.display = 'flex';
  capsBar.style.display = 'none';
  bootsBar.style.display = 'none';
  mufflersBar.style.display = 'none';


});


const caps = document.querySelector('.carBtn2');
const capsBar = document.getElementById('hidden2');

caps.addEventListener('click', function()
{
  capsBar.style.display = 'flex';
  gogglesBar.style.display = 'none';
  bootsBar.style.display = 'none';
  mufflersBar.style.display = 'none';


});

const boots = document.querySelector('.carBtn3');
const bootsBar = document.getElementById('hidden3');

boots.addEventListener('click', function()
{
  bootsBar.style.display = 'flex';
  gogglesBar.style.display = 'none';
  capsBar.style.display = 'none';
  mufflersBar.style.display = 'none';


});

const mufflers = document.querySelector('.carBtn4');
const mufflersBar = document.getElementById('hidden4');

mufflers.addEventListener('click', function()
{
  mufflersBar.style.display = 'flex';
  gogglesBar.style.display = 'none';
  capsBar.style.display = 'none';
  bootsBar.style.display = 'none';


});

//Dressing Up


// Function to hide all wearingGoggle elements
function hideAllWearingGoggles() {
  for (let i = 1; i <= 4; i++) {
      const wearingGoggle = document.getElementById(`wearingGoggle${i}`);
      if (wearingGoggle) {
          wearingGoggle.style.display = 'none';
      }
  }
}

// Loop 
for (let i = 1; i <= 4; i++) {
  // Construct the IDs for the goggle and wearingGoggle elements
  const goggleId = `goggle-${i}`;
  const wearingGoggleId = `wearingGoggle${i}`;
  

  const goggle = document.getElementById(goggleId);
  const wearingGoggle = document.getElementById(wearingGoggleId);
  
  // Check if the elements exist to avoid errors
  if (goggle && wearingGoggle) {
      // Add click event listener to the goggle element
      goggle.addEventListener('click', function() {
          // Hide all wearingGoggle elements first
          hideAllWearingGoggles();
          // Then display the clicked wearingGoggle element
          wearingGoggle.style.display = 'block';
      });
      
      // Add click event listener to the wearingGoggle element
      wearingGoggle.addEventListener('click', function() {
          wearingGoggle.style.display = 'none';
      });
  }
}

//Caps

function hideAllWearingCaps() {
  for (let i = 1; i <= 4; i++) {
      const wearingCap = document.getElementById(`wearingCap${i}`);
      if (wearingCap) {
          wearingCap.style.display = 'none';
      }
  }
}

// Loop to handle elements with IDs from 1 to 4
for (let i = 1; i <= 4; i++) {
  // Construct the IDs for the goggle and wearingGoggle elements
  const capId = `cap-${i}`;
  const wearingCapId = `wearingCap${i}`;
  
  // Get the elements by their IDs
  const cap = document.getElementById(capId);
  const wearingCap = document.getElementById(wearingCapId);
  
  // Check if the elements exist to avoid errors
  if (cap && wearingCap) {
      // Add click event listener to the goggle element
      cap.addEventListener('click', function() {
          // Hide all wearingGoggle elements first
          hideAllWearingCaps();
          // Then display the clicked wearingGoggle element
          wearingCap.style.display = 'block';
      });
      
      // Add click event listener to the wearingGoggle element
      wearingCap.addEventListener('click', function() {
          wearingCap.style.display = 'none';
      });
  }
}

//Boots


function hideAllWearingBoots() {
  for (let i = 1; i <= 4; i++) {
      const wearingBoot = document.getElementById(`wearingBoot${i}`);
      if (wearingBoot) {
          wearingBoot.style.display = 'none';
      }
  }
}

// Loop to handle elements with IDs from 1 to 4
for (let i = 1; i <= 4; i++) {
  // Construct the IDs for the goggle and wearingGoggle elements
  const bootId = `boot-${i}`;
  const wearingBootId = `wearingBoot${i}`;
  
  // Get the elements by their IDs
  const boot = document.getElementById(bootId);
  const wearingBoot = document.getElementById(wearingBootId);
  
  // Check if the elements exist to avoid errors
  if (boot && wearingBoot) {
      // Add click event listener to the goggle element
      boot.addEventListener('click', function() {
          // Hide all wearingGoggle elements first
          hideAllWearingBoots();
          // Then display the clicked wearingGoggle element
          wearingBoot.style.display = 'block';
      });
      
      // Add click event listener to the wearingGoggle element
      wearingBoot.addEventListener('click', function() {
          wearingBoot.style.display = 'none';
      });
  }
}

//Muffler

function hideAllWearingMufflers() {
  for (let i = 1; i <= 4; i++) {
      const wearingMuffler = document.getElementById(`wearingMuffler${i}`);
      if (wearingMuffler) {
          wearingMuffler.style.display = 'none';
      }
  }
}

// Loop to handle elements with IDs from 1 to 4
for (let i = 1; i <= 4; i++) {
  // Construct the IDs for the goggle and wearingGoggle elements
  const mufflerId = `muffler-${i}`;
  const wearingMufflerId = `wearingMuffler${i}`;
  
  // Get the elements by their IDs
  const muffler = document.getElementById(mufflerId);
  const wearingMuffler = document.getElementById(wearingMufflerId);
  
  // Check if the elements exist to avoid errors
  if (muffler && wearingMuffler) {
      // Add click event listener to the goggle element
      muffler.addEventListener('click', function() {
          // Hide all wearingGoggle elements first
          hideAllWearingMufflers();
          // Then display the clicked wearingGoggle element
          wearingMuffler.style.display = 'block';
      });
      
      // Add click event listener to the wearingGoggle element
      wearingMuffler.addEventListener('click', function() {
          wearingMuffler.style.display = 'none';
      });
  }
}







