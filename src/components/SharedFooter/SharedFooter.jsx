import { Outlet } from 'react-router-dom';
import css from './SharedFooter.module.css';
import { Suspense } from 'react';

export const SharedFooter = () => {
  return (
    <>
      <Suspense fallback={<div className={css.suspense}>Loading page...</div>}>
        <Outlet />
      </Suspense>
      <div className={css.footer}>© 2024 - Yellow Connect</div>
    </>
  );
};

export default SharedFooter;
