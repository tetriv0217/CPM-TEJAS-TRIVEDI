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
            Website : <a href="https://www.idurarapp.com">#</a>{' '}
          </p>
          <p>
            GitHub :{' '}
            <a href="https://github.com/idurar/idurar-erp-crm">
              https://github.com/idurar/idurar-erp-crm
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
