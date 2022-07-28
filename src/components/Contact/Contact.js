import SectionBlog from 'components/SectionBlog/SectionBlog';
import ImageBlogWrapper from 'components/ImageBlogWrapper/ImageBlogWrapper';
import Image from 'components/Image/Image';
import FormContactWrapper from 'components/FormContactWrapper/FormContactWrapper';
import SubTitle from 'components/SubTitle/SubTitle';
import ContactForm from 'components/ContactForm/ContactForm';
import * as imageContact from 'service/imageImport/contact/imageContact';

const Contact = () => {
  return (
    <SectionBlog>
      <ImageBlogWrapper>
        <Image
          deskWebp={imageContact.contactDeskWebp}
          deskWebp_2x={imageContact.contactDeskWebp_2x}
          desk={imageContact.contactDesk}
          desk_2x={imageContact.contactDesk_2x}
          tabWebp={imageContact.contactTabWebp}
          tabWebp_2x={imageContact.contactTabWebp_2x}
          tab={imageContact.contactTab}
          tab_2x={imageContact.contactTab_2x}
          mobWebp={imageContact.contactMobWebp}
          mobWebp_2x={imageContact.contactMobWebp_2x}
          mob={imageContact.contactMob}
          mob_2x={imageContact.contactMob_2x}
          src={imageContact.contactMob}
          alt="contact"
        />
      </ImageBlogWrapper>
      <FormContactWrapper>
        <SubTitle>Request Callback</SubTitle>
        <ContactForm />
      </FormContactWrapper>
    </SectionBlog>
  );
};

export default Contact;
