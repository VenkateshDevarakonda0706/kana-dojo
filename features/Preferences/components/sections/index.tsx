'use client';
import clsx from 'clsx';
import Themes from '../display/Themes';
import Fonts from '../display/Fonts';
import Behavior from './Behavior';
import Backup from './Backup';
import CollapsibleSection from '../shared/CollapsibleSection';
import PreferencesSectionNav from '../shared/PreferencesSectionNav';
// import GoalTimers from './GoalTimers';
import {
  Joystick,
  Sparkles,
  CaseSensitive,
  Blocks,
  Palette,
  Save,
  Wand2,
  // Target
} from 'lucide-react';
import Effects from '../display/Effects';

const Settings = () => {
  return (
    <div className='flex flex-col gap-6'>
      <PreferencesSectionNav />

      <div id='behavior' className='scroll-mt-28'>
        {/* Behavior Section */}
        <CollapsibleSection
          title='Behavior'
          fullBorder
          icon={<Joystick size={28} />}
          level='section'
          defaultOpen={true}
          storageKey='prefs-behavior'
        >
          <Behavior />
        </CollapsibleSection>
      </div>

      <div id='display' className='scroll-mt-28'>
        {/* Display Section */}
        <CollapsibleSection
          title='Display'
          fullBorder
          icon={<Palette size={28} />}
          level='section'
          defaultOpen={true}
          storageKey='prefs-display'
        >
          <div className='flex flex-col gap-6'>
            {/* Themes Subsection */}
            <CollapsibleSection
              title='Themes'
              icon={<Sparkles size={22} />}
              level='subsection'
              defaultOpen={true}
              storageKey='prefs-themes'
            >
              <Themes />
            </CollapsibleSection>

            {/* Fonts Subsection */}
            <CollapsibleSection
              title='Fonts'
              icon={<CaseSensitive size={28} />}
              level='subsection'
              defaultOpen={true}
              storageKey='prefs-fonts'
            >
              <Fonts />
            </CollapsibleSection>
          </div>
        </CollapsibleSection>
      </div>

      <div id='effects' className='scroll-mt-28'>
        {/* Effects Section */}
        <CollapsibleSection
          title='Effects'
          fullBorder
          icon={<Wand2 size={28} />}
          level='section'
          defaultOpen={true}
          storageKey='prefs-effects'
        >
          <Effects />
        </CollapsibleSection>
      </div>

      {/* Goal Timers section - commented out
      <CollapsibleSection
        title='Goal Timers'
        icon={<Target size={28} />}
        level='section'
        defaultOpen={true}
        storageKey='prefs-goal-timers'
      >
        <GoalTimers />
      </CollapsibleSection>
      */}

      {/* Backup Section - not collapsible since it's short */}
      <div className='flex flex-col gap-4'>
        <h3 className='flex flex-row items-end gap-2 border-l-10 border-(--border-color) py-3 pl-4 text-2xl'>
          <Save size={22} className='text-(--secondary-color)' />
          <span>Backup</span>
        </h3>
        <Backup />
      </div>

      {/* Coming Soon */}
      <div className='mb-12 flex flex-col gap-4'>
        <h3
          className={clsx(
            'flex flex-row items-end gap-2 border-l-20 border-(--border-color) py-6 pl-4 text-3xl',
          )}
        >
          <Blocks size={32} />
          <span>Coming Soon...</span>
        </h3>
      </div>
    </div>
  );
};

export default Settings;
