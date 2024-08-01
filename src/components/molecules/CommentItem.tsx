import { formatDistanceToNow } from 'date-fns';
import { ko } from 'date-fns/locale';
import { useState } from 'react';

import Avatar from '@/components/atoms/Avatar';
import Button from '@/components/atoms/Button';
import Container from '@/components/atoms/Container';
import Divider from '@/components/atoms/Divider';
import Typography from '@/components/atoms/Typography';
import CommentRegister from '@/components/molecules/CommentRegister';
import { UserType } from '@/types/auth.type';

type CommentItemProps = {
  id: string;
  content: string;
  created_at: string;
  updated_at: string;
  nickname: string;
  avatar: string;
  isReply: boolean;
  isOwner: boolean;
  user: UserType;
};

export default function CommentItem(props: CommentItemProps) {
  const {
    id,
    content,
    created_at,
    updated_at,
    nickname,
    avatar,
    isReply,
    isOwner,
    user,
  } = props;
  const [isReplying, setIsReplying] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  return (
    <>
      <Container.FlexCol className="gap-7 py-7">
        <Container.FlexRow className="justify-between">
          <Container.FlexRow className="items-center gap-[0.9375rem] ">
            <Avatar.L src={avatar} />
            <Container.FlexCol className="gap-3 text-brown">
              <Typography.P1>{nickname}</Typography.P1>
              <Typography.Span1>
                {created_at !== updated_at
                  ? formatDistanceToNow(new Date(created_at), {
                      addSuffix: true,
                      locale: ko,
                    })
                  : formatDistanceToNow(new Date(updated_at), {
                      addSuffix: true,
                      locale: ko,
                    })}
              </Typography.Span1>
            </Container.FlexCol>
          </Container.FlexRow>
          <Container.FlexRow className="gap-2 text-brown">
            {isReply || (
              <Button.Ghost
                className="p-[0.625rem]"
                onClick={() => setIsReplying(prev => !prev)}
              >
                <Typography.P2>답변</Typography.P2>
              </Button.Ghost>
            )}

            {isOwner && (
              <>
                <Button.Ghost
                  className="p-[0.625rem]"
                  onClick={() => setIsEditing(prev => !prev)}
                >
                  <Typography.P2>수정</Typography.P2>
                </Button.Ghost>
                <Button.Ghost className="p-[0.625rem]">
                  <Typography.P2>삭제</Typography.P2>
                </Button.Ghost>
              </>
            )}
          </Container.FlexRow>
        </Container.FlexRow>
        {isEditing ? (
          <CommentRegister
            nickName={user.nickname as string}
            content={content}
          />
        ) : (
          <Typography.P2 className="text-brown">{content}</Typography.P2>
        )}
      </Container.FlexCol>
      {isReplying && <CommentRegister nickName={user.nickname as string} />}
      <Divider.Col className="border-t-0 " />
    </>
  );
}
