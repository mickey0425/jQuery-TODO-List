$(document).ready(function() {

  $('#input').on('keypress', enterValue);
  $('#addbtn').on('click', additem);

  function enterValue(e) {

    if (e.keyCode === 13) {
      additem();
    }
  }

  function additem() {

    var inputValue = $("input").val();
    if (inputValue !== '') {

      var createDiv = $('<div></div>').addClass('items');
      var createP = $('<p></p>').text(inputValue);
      var createEditIcon = $('<i></i>').addClass('fas fa-edit');
      var createDeleteIcon = $('<i></i>').addClass('far fa-trash-alt');

      createP.on('click', complete);
      createEditIcon.on('click', editItem);
      createDeleteIcon.on('click', deleteitem);

      createDiv.append(createP);
      createDiv.append(createEditIcon);
      createDiv.append(createDeleteIcon);
      $('#mylist').append(createDiv);

      $('#input').val(''); //clear input

    }
  }

  function complete() {
    $(this).css('text-decoration', 'line-through');
  }

  function editItem() {

    var createInput = $('<input>');
    $(this).parent().append(createInput);
    createInput.focus();
    createInput.on('blur', function() {

      this.remove();

    })
    createInput.on('keypress', function(e) {

      if (e.keyCode === 13) {
        var editValue = $(this).val();
        var eleP = $(this).prev().prev().prev();
        eleP.text(editValue);
        this.blur();
      }

    })
  }

  function deleteitem() {
    $(this).parent().remove();
  }

});
