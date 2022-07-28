import * as imgMeeting from 'service/imageImport/casesGallery/imageMeeting';
import * as imgManWorking from 'service/imageImport/casesGallery/imageManWorking';
import * as imgHandshake from 'service/imageImport/casesGallery/imageHandshake';
import * as imgHands from 'service/imageImport/casesGallery/imageHands';
import * as imgWomanWorking from 'service/imageImport/casesGallery/imageWomanWorking';
import * as imgBuildings from 'service/imageImport/casesGallery/imageBuildings';

export const images = [
  { url: imgMeeting, urlModal: imgMeeting.meeting, title: 'Meeting' },
  {
    url: imgManWorking,
    urlModal: imgManWorking.manWorking,
    title: 'Man working',
  },
  { url: imgHandshake, urlModal: imgHandshake.handshake, title: 'Handshake' },
  { url: imgHands, urlModal: imgHands.hands, title: 'Hands' },
  {
    url: imgWomanWorking,
    urlModal: imgWomanWorking.womanWorking,
    title: 'Woman working',
  },
  { url: imgBuildings, urlModal: imgBuildings.buildings, title: 'Buildings' },
];
