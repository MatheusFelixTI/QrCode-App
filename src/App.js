import LiveQrCode from './components/LiveQrCode';
import QRCode from 'qrcode';
import { useState } from 'react';
import BasicInput from './components/BasicInput';
import Header from './components/Header';

function App() {
  const [qrText, SetQrText] = useState("");
  const [qrCode, SetQrCode] = useState("");

  function generateQrCode() {
    QRCode.toDataURL(qrText, {
      width: 900,
      margin: 3
    }, (err, url) => {
      if (err) return console.log(err);
      SetQrCode(url);
    })
  }

  function handleQrCode(e) {
    SetQrText(e.target.value);
    generateQrCode();
  }

  return (
    <div className="w-full flex flex-col items-center py-20">
      <Header />
      <LiveQrCode value={qrText} />
      <BasicInput 
      label="Digite seu QR Code:"
      type="text"
      value={qrText}
      onChange={handleQrCode}
      />
      <br/>
      <a href={qrCode} download={`${qrText}.png`} className="bg-zinc-600 text-white p-2 rounded-md hover:bg-zinc-500">Download</a>
    </div>
  );
}

export default App;
