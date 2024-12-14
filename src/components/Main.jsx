import manTexting from "../assets/desktop/image-man-texting.jpg";
import menMeeting from "../assets/desktop/image-men-in-meeting.jpg";
import womanVideocall from "../assets/desktop/image-woman-in-videocall.jpg";
import womanVideochat from "../assets/desktop/image-women-videochatting.jpg";

export default function Main() {
  return (
    <main class="meetings">
      <div class="vertical-line" />
      <div class="circle-one">
        <div class="number">01</div>
      </div>
      <div class="row-images">
        <img src={manTexting} alt="" />
        <img src={menMeeting} alt="" />
        <img src={womanVideocall} alt="" />
        <img src={womanVideochat} alt="" />
      </div>
      <div class="meetings-description">
        <div className="meetings-title">
          <h3>BUILT FOR MODERN USE</h3>
          <h2>Smarter meetings, all in one place</h2>
        </div>
        <p>
          Send messages, share files, show your screen, and record your meetings
          — all in one workspace. Control who can join with invite-only team
          access, data encryption, and data export.
        </p>
      </div>
    </main>
  );
}
