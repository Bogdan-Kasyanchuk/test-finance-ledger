import * as imgMeeting from 'helpers/imageImport/CasesGallery/imageMeeting';
import * as imgManWorking from 'helpers/imageImport/CasesGallery/imageManWorking';
import * as imgHandshake from 'helpers/imageImport/CasesGallery/imageHandshake';
import * as imgHands from 'helpers/imageImport/CasesGallery/imageHands';
import * as imgWomanWorking from 'helpers/imageImport/CasesGallery/imageWomanWorking';
import * as imgBuildings from 'helpers/imageImport/CasesGallery/imageBuildings';

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
