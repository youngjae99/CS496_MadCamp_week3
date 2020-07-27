import React, {Component} from "react";
import "./Popup.css";

class Popup extends Component{
    render() {
        return (
         <PopupContainer >
       
          <Alert key={POPUP.ALERT} escapable />
          <Confirm key={POPUP.CONFIRM} />
          <PostEditPopup key={POPUP.POST_EDIT} />
         </PopupContainer>
        )
    }
}
export default Popup;