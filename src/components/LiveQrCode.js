import QRCode from "react-qr-code";

function LiveQrCode({value}) {
    return(
        <QRCode value={value} />
    );
}

export default LiveQrCode;