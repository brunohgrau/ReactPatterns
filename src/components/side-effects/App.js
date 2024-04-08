import { useState } from "react";
import Alert from "./components/Alert";

function App() {
  const [showAlert, setShowAlert] = useState(false);
+  const [alertMessage, setAlertMessage] = useState("");
  function showAlertHandler() {
-    // state updating is done by passing a function to setShowAlert
-    // because the new state depends on the previous state (it's the opposite)
    setShowAlert((isShowing) => !isShowing);
  }
+  function updateAlertMessageHandler(event) {
+    setAlertMessage(event.target.value);
+  }
+  function resetAlertMessageHandler() {
+    setAlertMessage("");

  return (
    <>
+      <div>
+        <label>
+          Alert message:
+          <input type="text" value={alertMessage} onChange={updateAlertMessageHandler}/>
+        </label>
+        <button onClick={resetAlertMessageHandler}>OK</button>
+      </div>
      <button onClick={showAlertHandler}>
        {showAlert ? "Hide" : "Show"} Alert
      </button>
+      {showAlert && <Alert message={alertMessage}/>}
-      {showAlert && <Alert />}
    </>
  );
}

export default App;



