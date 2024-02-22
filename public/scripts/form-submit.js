$(document).ready(() => {
  const $form = $("form")

  $form.on("submit", (event) => {

    // Prevents the default form submission
    event.preventDefault();
    
    const formData = $form.serialize();

    $.post({
      url: "http://localhost:8080/tweets",
      data: formData,
      success: () => {
        console.log('Success!');
      }
    })

    $("#tweet-text").val('')
  })
})