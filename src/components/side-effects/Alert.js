import { useState, useEffect } from "react";
<<<<<<<<<<<<<<  ✨ Codeium Command 🌟 >>>>>>>>>>>>>>>>
+function changeAlertMsgHandler(event) {
+  if (event && event.target && event.target.value) {
+    setAlertMsg(event.target.value);
+  } else {
+    console.error("Event, event.target or event.target.value is null or undefined");
+  }
+}
-function changeAlertMsgHandler(event) {
-  setAlertMsg(event.target.value);
-  }
<<<<<<<  d46c87bc-b500-4504-93bc-a2e20c13a91b  >>>>>>>
  function setAlert() {
    setTimeout(function () {
    console.log(alertMsg);
  }, 2000);
  }
  useEffect(
    function () {
      setAlert();
    },[]
    );

  return (
    <>
      {!alertDone && <p>Relax, you still got some time!</p>}
      {alertDone && <p>Time to get up!</p>}
    </>
  );
}
export default Alert;



