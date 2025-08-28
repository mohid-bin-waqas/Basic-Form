document.getElementById('form').addEventListener('submit', function(event){
  event.preventDefault();

  const Full_Name = document.getElementById('FullName').value;
  const Father_Name = document.getElementById('FatherName').value;
  const Contact_No = document.getElementById('MobileNo').value;
  const Province = document.querySelector('input[name="Province"]:checked')?.value || '';
  const City = document.getElementById('City').value;
  const Email = document.getElementById('Email').value;
  const Skills = document.getElementById('Skills').value;

  const outputdiv = document.getElementById('ouutput');
  outputdiv.classList.remove('hidden'); // Show when submit clicked

  outputdiv.innerHTML = `
    <p><b>Full Name:</b> ${Full_Name}</p>
    <p><b>Father Name:</b> ${Father_Name}</p>
    <p><b>Contact No:</b> ${Contact_No}</p>
    <p><b>Province:</b> ${Province}</p>
    <p><b>City:</b> ${City}</p>
    <p><b>Email:</b> ${Email}</p>
    <p><b>Skills:</b> ${Skills}</p>
  `;
});
