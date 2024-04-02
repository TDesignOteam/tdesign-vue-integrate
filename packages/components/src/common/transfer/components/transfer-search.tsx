import type { PropType } from '@td/adapter-vue';
import { defineComponent } from '@td/adapter-vue';
import { SearchIcon as TdSearchIcon } from 'tdesign-icons-vue-next';

import { useGlobalIcon, usePrefixClass } from '@td/adapter-hooks';
import type { SearchOption } from '../interface';
import TInput from '../../input';

export default defineComponent({
  name: 'TTransferSearch',
  props: {
    value: {
      type: String,
      default: '',
    },
    search: {
      type: [Boolean, Object] as PropType<SearchOption>,
      default: false,
    },
    placeholder: {
      type: String,
      default: '',
    },
    onChange: Function,
  },
  setup(props) {
    const classPrefix = usePrefixClass();
    const { SearchIcon } = useGlobalIcon({ SearchIcon: TdSearchIcon });
    const handleChange = (value: string, changeCtx: any) => {
      props.onChange?.({
        value,
        e: changeCtx.e,
      });
    };
    const inputProps = typeof props.search === 'object' ? props.search : { clearable: true };

    return () => (
      <div class={`${classPrefix.value}-transfer__search-wrapper`}>
        <TInput {...inputProps} defaultValue={props.value} onChange={handleChange} placeholder={props.placeholder}>
          <SearchIcon slot="suffix-icon" />
        </TInput>
      </div>
    );
  },
});
