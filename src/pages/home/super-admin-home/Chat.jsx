import EmojiPicker from "emoji-picker-react";
import { useState } from "react";
import { BsEmojiSmile } from "react-icons/bs";
import { CiVideoOn } from "react-icons/ci";
import { HiMiniPaperClip } from "react-icons/hi2";

const Chat = () => {
    const [showEmoji, setShowEmoji] = useState(false);

    const openFileInput = () => {
        document.getElementById("fileInput").click();
    };

    return (
        <div className="chat-container border-l border-r border-b px-8 pb-8 font-['DM_Sans']">
            <p className="text-xl leading-6 font-['DM_Sans'] text-[#A7A7A7] mb-5 uppercase text-center">
                june 1
            </p>
            <div className="you">
                <div className="text">
                    <p>Good afternoon, Olivia!</p>
                    <p>How are you feeling today?</p>
                </div>
                <span className="date">10:20</span>
            </div>
            <div className="user">
                <div className="text">
                    <p>Good afternoon, Dr. Lopez!</p>
                    <p>I&apos;m good, looking forward for the appointment</p>
                </div>
                <span className="date">10:20</span>
            </div>

            <p className="text-xl leading-6 font-['DM_Sans'] text-[#A7A7A7] mb-5 uppercase text-center">
                today
            </p>

            <div className="you">
                <div className="text">
                    <p>Hey, Olivia!</p>
                    <p>Are your ready for a call?</p>
                </div>
                <span className="date">10:20</span>
            </div>
            <div className="user">
                <div className="text">
                    <p>Hello, Dr. Lopez</p>
                </div>
                <div className="text">
                    <p>I&apos;m 5 minutes late, sorry!</p>
                </div>
                <span className="date">10:20</span>
            </div>
            <div className="you">
                <div className="text">
                    <p>No worries, take your time 😊</p>
                </div>
                <span className="date">10:20</span>
            </div>

            <p className="text-base text-[#818183] flex items-center gap-4 justify-center">
                <CiVideoOn className="w-6 h-6" /> Video call started
            </p>

            <div className="form">
                <div className="file-input">
                    <input id="fileInput" type="file" />
                    <HiMiniPaperClip
                        className="paper-clip"
                        onClick={openFileInput}
                    />
                </div>
                <div className="text-input">
                    <input type="text" />
                    <BsEmojiSmile
                        className="emoji"
                        onClick={() => setShowEmoji(!showEmoji)}
                    />
                </div>
            </div>

            <div>{showEmoji && <EmojiPicker />}</div>
        </div>
    );
};

export default Chat;
