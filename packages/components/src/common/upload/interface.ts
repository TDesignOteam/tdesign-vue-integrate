import type { TNode } from '@td/shared/interface';
import type { TdUploadProps, UploadRemoveContext } from '@td/intel/components/calendar/type';
import type { GlobalConfigProvider } from '../config-provider/type';
import type { ImageViewerProps } from '../image-viewer';

export interface CommonDisplayFileProps {
  files: TdUploadProps['files'];
  toUploadFiles: TdUploadProps['files'];
  displayFiles: TdUploadProps['files'];
  theme: TdUploadProps['theme'];
  abridgeName: TdUploadProps['abridgeName'];
  placeholder: TdUploadProps['placeholder'];
  classPrefix: string;
  tips?: TdUploadProps['tips'];
  status?: TdUploadProps['status'];
  locale?: GlobalConfigProvider['upload'];
  sizeOverLimitMessage?: string;
  autoUpload?: boolean;
  disabled?: boolean;
  uploading?: boolean;
  tipsClasses?: string;
  errorClasses?: string[];
  placeholderClass?: string;
  showUploadProgress?: boolean;
  xhrReq?: XMLHttpRequest;
  default?: TNode;
  fileListDisplay?: TdUploadProps['fileListDisplay'];
  onRemove?: (p: UploadRemoveContext) => void;
  onPasteFileChange?: (payload: ClipboardEvent) => void;
  imageViewerProps?: ImageViewerProps;
}

export type UploadProps = TdUploadProps;

export * from '@td/intel/components/calendar/type';
