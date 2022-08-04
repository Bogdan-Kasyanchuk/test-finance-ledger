import SectionBlog from 'components/SectionBlog/SectionBlog';
import ImageBlogWrapper from 'components/ImageBlogWrapper/ImageBlogWrapper';
import Image from 'components/Image/Image';
import FormWrapper from 'components/FormWrapper/FormWrapper';
import SubTitleSection from 'components/SubTitleSection/SubTitleSection';
import Form from 'components/Form/Form';
import * as imageContact from 'service/imageImport/contact/imageContact';

const RequestCallback = () => {
  return (
    <SectionBlog>
      <ImageBlogWrapper maxHeightTab="356px" maxHeightDesk="456px">
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
      <FormWrapper>
        <SubTitleSection>Request Callback</SubTitleSection>
        <Form />
      </FormWrapper>
    </SectionBlog>
  );
};

export default RequestCallback;
