// Google Drive video links — change a link here and it updates everywhere on the site.
// Each Drive file must be shared as "Anyone with the link can view".

export const DRIVE_VIDEOS = {
  trainexIntro: "https://drive.google.com/file/d/1trn4LYP65B7PuGmF7XoeNzdlBwR2y3Jv/view?usp=drive_link",
  voydLogo: "https://drive.google.com/file/d/1NSowfey2m7YIV4_Z220_iU6n4BzT81fK/view?usp=drive_link",
  promo1: "https://drive.google.com/file/d/1Jz2jqhvcbm0vEwzylp8exOxxzEmG4ppB/view?usp=drive_link",
  promo2: "https://drive.google.com/file/d/1q_nx_uroZyULgxHf7ausPb7vQW8NI0uv/view?usp=drive_link",
  promo3: "https://drive.google.com/file/d/1dSUhw0vn3XzmJUkMNjsmT0EQwwYDmLwI/view?usp=drive_link",
};

// Pulls the file id out of any Drive link (…/file/d/ID/view or …?id=ID)
export const getDriveId = (link = "") => {
  const m = link.match(/\/d\/([\w-]+)/) || link.match(/[?&]id=([\w-]+)/);
  return m ? m[1] : "";
};

// Player that works inside a popup (iframe)
export const drivePreviewUrl = (link) =>
  `https://drive.google.com/file/d/${getDriveId(link)}/preview`;

// Small picture for the card (works when the file is shared publicly)
export const driveThumbUrl = (link) =>
  `https://drive.google.com/thumbnail?id=${getDriveId(link)}&sz=w800`;
