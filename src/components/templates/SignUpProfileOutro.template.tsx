import Button from '@/components/atoms/Button';
import Container from '@/components/atoms/Container';
import Icon from '@/components/atoms/Icon';
import Link from '@/components/atoms/Link';
import Typography from '@/components/atoms/Typography';

export default function SignUpProfileOutroTemplate() {
  return (
    <Container.FlexCol className="relative top-[-116px] size-full items-center justify-center gap-y-[68px]">
      <Container.FlexCol className="items-center gap-y-[30px]">
        <Container.FlexCol className="items-center gap-y-7">
          <Typography.Head2 className="text-brown">
            회원가입이 완료되었어요
          </Typography.Head2>
          <Typography.P1 className="text-brown">
            나만의 룸메이트를 찾으러 가볼까요?
          </Typography.P1>
        </Container.FlexCol>
      </Container.FlexCol>
      <Icon type="seeking-house" />
      <Container.FlexRow className="items-center justify-center gap-3">
        <Link to="/house">
          <Button.Outline className="rounded-full px-11 py-4 text-brown">
            <Typography.P1>홈으로</Typography.P1>
          </Button.Outline>
        </Link>
        <Link to="/sign/in">
          <Button.Fill className="rounded-full px-11 py-4 text-bg">
            <Typography.P1>로그인</Typography.P1>
          </Button.Fill>
        </Link>
      </Container.FlexRow>
    </Container.FlexCol>
  );
}
