import { FC, useState } from 'react';
import Popup from 'reactjs-popup';

import { 
  IoCheckmarkSharp,
  IoCopy,
  IoCloseSharp
} from "react-icons/io5";
import {
  EmailShareButton,
  FacebookShareButton,
  GabShareButton,
  HatenaShareButton,
  InstapaperShareButton,
  LineShareButton,
  LinkedinShareButton,
  LivejournalShareButton,
  MailruShareButton,
  OKShareButton,
  PinterestShareButton,
  PocketShareButton,
  RedditShareButton,
  TelegramShareButton,
  TumblrShareButton,
  TwitterShareButton,
  ViberShareButton,
  VKShareButton,
  WhatsappShareButton,
  WorkplaceShareButton,
  EmailIcon,
  FacebookIcon,
  GabIcon,
  HatenaIcon,
  InstapaperIcon,
  LineIcon,
  LinkedinIcon,
  LivejournalIcon,
  MailruIcon,
  OKIcon,
  PinterestIcon,
  PocketIcon,
  RedditIcon,
  TelegramIcon,
  TumblrIcon,
  TwitterIcon,
  ViberIcon,
  VKIcon,
  WhatsappIcon,
  WorkplaceIcon,
} from 'react-share';

interface Props {
  open: boolean;
  onClose: () => void;
}

const SharePopup: FC<Props> = ({ open, onClose }) => {
  const [isCopied, setIsCopied] = useState(false); // Add state for copy status
  const websiteLink = "https://www.thedailycommute.com"; // Define the website link

  // Handle copying the website link
  const handleCopyLink = () => {
    navigator.clipboard.writeText(websiteLink);
    setIsCopied(true); // Set copy status to true
    setTimeout(() => setIsCopied(false), 2000); // Reset copy status after 2 seconds
  };

  // Define the share buttons
  const shareButtons = [
    { Button: EmailShareButton, Icon: EmailIcon },
    { Button: FacebookShareButton, Icon: FacebookIcon },
    { Button: GabShareButton, Icon: GabIcon },
    { Button: HatenaShareButton, Icon: HatenaIcon },
    { Button: InstapaperShareButton, Icon: InstapaperIcon },
    { Button: LineShareButton, Icon: LineIcon },
    { Button: LinkedinShareButton, Icon: LinkedinIcon },
    { Button: LivejournalShareButton, Icon: LivejournalIcon },
    { Button: MailruShareButton, Icon: MailruIcon },
    { Button: OKShareButton, Icon: OKIcon },
    { Button: PinterestShareButton, Icon: PinterestIcon, media: "https://www.thedailycommute.com/path-to-image.jpg" },
    { Button: PocketShareButton, Icon: PocketIcon },
    { Button: RedditShareButton, Icon: RedditIcon },
    { Button: TelegramShareButton, Icon: TelegramIcon },
    { Button: TumblrShareButton, Icon: TumblrIcon },
    { Button: TwitterShareButton, Icon: TwitterIcon },
    { Button: ViberShareButton, Icon: ViberIcon },
    { Button: VKShareButton, Icon: VKIcon },
    { Button: WhatsappShareButton, Icon: WhatsappIcon },
    { Button: WorkplaceShareButton, Icon: WorkplaceIcon },
  ];

  return (
    <Popup open={open} onClose={onClose}>
      <div className='share-popup-container'>
        <div className='header-container'>
          <h2>Share this Website</h2>
          <button className='close-button' onClick={onClose}>
            <IoCloseSharp />
          </button>
        </div>
        <div className='share-buttons-container'>
          {shareButtons.map(({ Button, Icon, media }, index) => (
            <Button key={index} url={websiteLink} {...(media && { media })}>
              <Icon size={48} round />
            </Button>
          ))}
        </div>

        <div className='link-copy-container'>
          <input type='text' value={websiteLink} readOnly />
          <button onClick={handleCopyLink}>
            {isCopied ? <IoCheckmarkSharp /> : <IoCopy />} {/* Update icon based on copy status */}
          </button>
        </div>
      </div>
    </Popup>
  );
};

export default SharePopup;
