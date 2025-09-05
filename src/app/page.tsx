import { Background } from '@/components/background/Background';
import { InquiryBox } from '@/components/inquiry-box/InquiryBox';

export default function Home() {
  return (
    <div className="flex h-full w-full flex-col">
      <Background />;
      <InquiryBox />
    </div>
  );
}
