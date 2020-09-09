import React from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

function PopupMessage() {
  const offset = { left: 20000, top: 200000, right: 20000, bottom: 20000 };
  return (
    <Popup
      trigger={<button className="popupbutton"> Trigger</button>}
      position=" bottom"
    >
      <div>
        <p>
          To align the Popup to a specific absolute point that is relative to
          the document, use the offset property. To align the Popup to a
          specific absolute point that is relative to the document, use the
          offset property. To align the Popup to a specific absolute point that
          is relative to the document, use the offset property. The Popup opens
          next to the point and uses the specified popupAlign configuration. The
          Popup opens next to the point and uses the specified popupAlign
          configuration.The Popup opens next to the point and uses the specified
          popupAlign configuration.
        </p>
        <label htmlFor="taskname">Task name </label>
        <input type="text" />
        <br />
        <label htmlFor="taskcontent">Description </label>

        <br />
        <textarea id="new_task_textarea" name="txtarea"></textarea>
        <br />
        <button id="new_task">Save</button>
      </div>
    </Popup>
  );
}

export default PopupMessage;

// const editingTemplate = (
//   <div>
//     <label htmlFor="taskname">Task name </label>
//     <input type="text" />
//     <br />
//     <label htmlFor="taskcontent">Description </label>

//     <br />
//     <textarea id="new_task_textarea" name="txtarea"></textarea>
//     <br />
//     <button id="new_task">Save</button>
//   </div>
// );

// import React from "react";
// import "../popup_style.css";

// class Popup extends React.Component {
//   render() {
//     return (
//       <div className="popup">
//         <div className="popup\_inner">
//           <h1>Hello</h1>
//           <button onClick={this.props.closePopup}>close me</button>
//         </div>
//       </div>
//     );
//   }
// }

// export default Popup;
