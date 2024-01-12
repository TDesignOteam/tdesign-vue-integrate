import { defineComponent } from 'vue';
import props from 'components/helper/descriptions/props';
import { PROPS } from 'adapter';

export default defineComponent({
  name: 'TDescriptionsItem',
  props: PROPS.descriptionItemProps,
});
