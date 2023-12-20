function initializeWidget() {
  /*
   * Subscribe to the EmbeddedApp onPageLoad event before initializing the widget
   */
  ZOHO.embeddedApp.on("PageLoad", function (data) {
    const module = data.Entity;
    const recordId = data.EntityId;
    let submitButton = document.getElementById("submit");
    submitButton.addEventListener("click", function () {
      let noteTitle = document.querySelector(".title").value;
      let noteContent = document.querySelector(".note-content").value;
      if (noteTitle == "") {
        alert("Please enter note title");
      } else if (noteContent == "") {
        alert("Please enter note content");
      } else {
        let data = {
          Entity: module,
          RecordID: recordId,
          Title: noteTitle,
          Content: noteContent
        };
        ZOHO.CRM.API.addNotes(data).then(function (data) {
		  console.log(data);
		});
		ZOHO.CRM.UI.Popup.closeReload();
      }
      console.log({ "Create note data": data });
    });
  });

  ZOHO.embeddedApp.init();
}
initializeWidget();
