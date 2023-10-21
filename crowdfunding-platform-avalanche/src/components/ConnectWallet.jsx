import React from 'react';

export default function ConnectWallet(props) {
    const containerStyle = {
        background: 'url("https://c4.wallpaperflare.com/wallpaper/142/751/831/landscape-anime-digital-art-fantasy-art-wallpaper-preview.jpg")', // Replace 'your-image-url-here' with the actual image URL
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };

    const buttonStyle = {
        color: 'white', // Text color set to white
    };

    return (
        <div className="connectWallet" style={containerStyle}>
            <div className="typingContainer">
                <div className="typing">Avalanche</div>
            </div>
            <div className="walletButtonContainer">
                <button className="walletButton" style={buttonStyle} onClick={props.connectMetamask}>
                    Connect to Metamask
                </button>
            </div>
        </div>
    );
}
