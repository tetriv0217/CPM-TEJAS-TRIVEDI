import { Button, Result } from 'antd';

import useLanguage from '@/locale/useLanguage';

const About = () => {
  const translate = useLanguage();
  return (
    <Result
      status="info"
      title={'CPM'}
      // subTitle={translate('Do you need help on customize of this ')}
      extra={
        <>
          <p>
            Website : <a href="https://cpm-tejas-trivedi-frontend.onrender.com/login">https://cpm-tejas-trivedi.onrender.com/</a>{' '}
          </p>
          <p>
            GitHub :{' '}
            <a href="https://github.com/tetriv0217/CPM-TEJAS-TRIVEDI.git">
            https://github.com/tetriv0217/CPM-TEJAS-TRIVEDI.git
            </a>
          </p>
          <Button
            type="primary"
            onClick={() => {
              window.open(`#`);
            }}
          >
            {translate('Contact us')}
          </Button>
        </>
      }
    />
  );
};

export default About;
