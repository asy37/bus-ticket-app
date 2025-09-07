import { Background } from '@/components/background/Background';
import { InquiryBox } from '@/features/home/components/InquiryBox';

export const HomeView = () => {
  return (
    <div className="w-full">
      <Background />;
      <InquiryBox />
    </div>
  );
};
