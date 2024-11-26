import { FC } from 'react';
import Popup from 'reactjs-popup';

import { 
    IoCopyOutline,
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
  const websiteLink = "https://www.thedailycommute.com"; // Define the website link

  // Handle copying the website link
  const handleCopyLink = () => {
    navigator.clipboard.writeText(websiteLink);
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
        <div className='link-copy-container'>
          <input type='text' value={websiteLink} readOnly />
          <button onClick={handleCopyLink}><IoCopyOutline /></button>
        </div>
        <div className='share-buttons-container'>
          {shareButtons.map(({ Button, Icon, media }, index) => (
            <Button key={index} url={websiteLink} {...(media && { media })}>
              <Icon size={48} round />
            </Button>
          ))}
        </div>
      </div>
    </Popup>
  );
};

export default SharePopup;
