let previewContainer = document.querySelector('.products-preview');
let previewBox = previewContainer.querySelectorAll('.preview');

document.querySelectorAll( '.tabs-content .sale-inside').forEach(sale-inside => {
  sale-inside.onClick = () =>{
 previewContainer.style.display ='flex';

    let name = sale-inside.getAttribute('data-name');
    previewBox.forEach(preview => {
      let target = preview.getAttribute('data-target');
      if (name == target){
        preview.classList.add('.active');
      }
    })
  };
});
previewBox.forEach((close => {
  close.querySelector('').onClick = () =>{
    close.classList..remove('active');
    previewContainer.style.display = 'none';
  };
});
