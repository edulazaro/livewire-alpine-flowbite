import './bootstrap';
import 'flowbite';

import { Livewire, Alpine } from '../../vendor/livewire/livewire/dist/livewire.esm';
import { initDropdowns, initCollapses, initModals, initFlowbite  } from 'flowbite'
import Datepicker  from 'flowbite-datepicker/Datepicker';

Livewire.start();

document.addEventListener('livewire:navigated', () => {
    initDropdowns();
    initCollapses();
    initModals();

    document.querySelectorAll('[datepicker]').forEach((input) => {
        new Datepicker (input, {
            autohide: true,
            format: 'dd/mm/yyyy',
            weekStart: 1,
        });

        input.addEventListener('changeDate', function(event) {
            input.dispatchEvent(new Event('input')); // So Livewire is able to pick the value
        });
    });
});
