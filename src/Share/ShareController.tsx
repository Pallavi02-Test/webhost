import React from "react";
import { type FC } from "react";

const ShareController: FC<Props> = ({
  children,
  shareData,
  onInteraction,
  onSuccess,
  onError,
  onNonNativeShare,
  disabled,
}) => {
  const handleOnClick = async () => {
    onInteraction && onInteraction();
    if (navigator.share) {
      try {
        await navigator.share(shareData);
        onSuccess && onSuccess();
      } catch (err) {
        onError && onError(err);
      }
    } else {
      onNonNativeShare && onNonNativeShare();
    }
  };

  return (
    <button onClick={handleOnClick} type="button" disabled={disabled}>
      {children}
    </button>
  );
};

interface Props {
  children: React.ReactNode;
  shareData: ShareData;
  onSuccess?: () => void;
  onError?: (error?: unknown) => void;
  onNonNativeShare?: () => void;
  onInteraction?: () => void;
  disabled?: boolean;
}

export default ShareController;
