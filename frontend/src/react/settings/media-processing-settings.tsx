/* 这台机器的媒体处理偏好，两张卡读写同一个 `['media-processing']` 键：
 * - 「视频预览」（「媒体库与入库」）：为本地视频生成九宫格与时间轴预览的总开关、时间轴档位与抽帧解码方式。
 *   总开关在前，依赖它的档位次之，少改的解码方式最后。
 * - 「视频播放」（「应用与维护」）：播放时整片与 HLS 转码的编解码方式。它管的是这台电脑的硬件，
 *   和开机自启同属本机运行，不放在设置弹窗的界面偏好里（ADR-0103）。 */
import { useQuery } from '@tanstack/react-query';
import { SettingsRow } from '@/components/application/settings/settings-rows';
import { Switch } from '@/components/base/switch/switch';
import { Select, SelectItem } from '@/components/base/select/select';

import { apiSend, errorMessage } from '../../api';
import { queryClient } from '../query';
import {
  MEDIA_PROCESSING_KEY, MEDIA_PROCESSING_URL, THUMBNAIL_JOBS_KEY, fetchMediaProcessing, type MediaProcessingPolicy,
} from '../settings-panel/settings-data';
import { LIBRARY_PROCESSING_KEY } from '../library-processing/library-processing';
import { ErrorText, Help, Rows, Section, Stack } from './section';
import { useAction } from './use-action';
import { VideoThumbnailControls } from './service-preferences';

export function MediaProcessingSettings({ receipt }: { receipt(message: string): void }) {
  const policy = useQuery({ queryKey: MEDIA_PROCESSING_KEY, queryFn: ({ signal }) => fetchMediaProcessing(signal) });
  const action = useAction();
  const error = action.error || (policy.error ? errorMessage(policy.error) : '');
  const blocked = !policy.data || policy.isFetching || !!action.busy;
  return (
    <Section title="Video previews">
      <Rows>
        <SettingsRow label="Generate video previews" description="Generate contact sheets and timeline previews for local videos; when off, duration and resolution are still probed per import rules.">
          <Switch aria-label="Generate video previews" isSelected={!!policy.data && !policy.data.metadata_only} isDisabled={blocked}
            onChange={(value) => void action.run('save', (signal) =>
              apiSend<MediaProcessingPolicy>(MEDIA_PROCESSING_URL, { metadata_only: !value }, 'POST', signal), (saved) => {
                queryClient.setQueryData(MEDIA_PROCESSING_KEY, saved);
                void queryClient.invalidateQueries({ queryKey: THUMBNAIL_JOBS_KEY });
                void queryClient.invalidateQueries({ queryKey: LIBRARY_PROCESSING_KEY });
                receipt(saved.metadata_only ? 'Video preview generation turned off' : 'Video preview generation turned on');
              })} />
        </SettingsRow>
      </Rows>
      <VideoThumbnailControls disabled={!policy.data || policy.data.metadata_only || !!action.busy} />
      <Rows>
        <SettingsRow label="Frame decoding method" description="Used to generate covers, contact sheets and timelines.">
          <div id="previewAccelerationSetting">
            <Select aria-label="Frame decoding method" selectedKey={policy.data?.preview_acceleration || 'auto'} isDisabled={blocked}
              onSelectionChange={(mode) => {
                if (mode === null) return;
                void action.run('preview_acceleration', (signal) => apiSend<MediaProcessingPolicy>(MEDIA_PROCESSING_URL,
                  { preview_acceleration: String(mode) }, 'POST', signal), (saved) => {
                  queryClient.setQueryData(MEDIA_PROCESSING_KEY, saved);
                  receipt('Frame decoding method saved');
                });
              }}>
              <SelectItem id="auto">Auto (hardware first)</SelectItem>
              <SelectItem id="software">Software decoding</SelectItem>
            </Select>
          </div>
        </SettingsRow>
      </Rows>
      {action.busy ? <Stack divided><Help role="status">Saving…</Help></Stack> : null}
      {error ? <Stack divided><ErrorText>{error}</ErrorText></Stack> : null}
    </Section>
  );
}

export function PlaybackTranscodeSettings({ receipt }: { receipt(message: string): void }) {
  const policy = useQuery({ queryKey: MEDIA_PROCESSING_KEY, queryFn: ({ signal }) => fetchMediaProcessing(signal) });
  const action = useAction();
  const error = action.error || (policy.error ? errorMessage(policy.error) : '');
  return (
    <Section title="Video playback">
      <Rows>
        <SettingsRow label="Transcoding method" description="Used to transcode video during playback.">
          <div id="playbackAccelerationSetting">
            <Select aria-label="Transcoding method" selectedKey={policy.data?.playback_acceleration || 'auto'}
              isDisabled={!policy.data || policy.isFetching || !!action.busy}
              onSelectionChange={(mode) => {
                if (mode === null) return;
                void action.run('playback_acceleration', (signal) => apiSend<MediaProcessingPolicy>(MEDIA_PROCESSING_URL,
                  { playback_acceleration: String(mode) }, 'POST', signal), (saved) => {
                  queryClient.setQueryData(MEDIA_PROCESSING_KEY, saved);
                  receipt('Transcoding method saved');
                });
              }}>
              <SelectItem id="auto">Auto (hardware first)</SelectItem>
              <SelectItem id="software">Software codec</SelectItem>
            </Select>
          </div>
        </SettingsRow>
      </Rows>
      {action.busy ? <Stack divided><Help role="status">Saving…</Help></Stack> : null}
      {error ? <Stack divided><ErrorText>{error}</ErrorText></Stack> : null}
    </Section>
  );
}
