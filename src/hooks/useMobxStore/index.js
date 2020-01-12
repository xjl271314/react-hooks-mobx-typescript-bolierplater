import * as React from 'react';
import { MobXProviderContext } from 'mobx-react';

export default function useMobxStore() {
    return React.useContext(MobXProviderContext)
}