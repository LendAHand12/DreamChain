import { useEffect } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';

import PageTitle from './components/PageTitle';
// import Calendar from './pages/Calendar';
// import Chart from './pages/Chart';
// import FormElements from './pages/Form/FormElements';
// import FormLayout from './pages/Form/FormLayout';
// import Profile from './pages/Profile';
// import Settings from './pages/Settings';
// import Tables from './pages/Tables';
// import Alerts from './pages/UiElements/Alerts';
// import Buttons from './pages/UiElements/Buttons';
import HomePage from './pages/Homepage';
import Mechanism from './pages/Mechanism';
import PolicyPage from './pages/Policy';
import ContactPage from './pages/Contact';
import { PrivateRoute, PublicRoute } from './helpers/router';
import SignInPage from './pages/SignIn';
import Profile from './pages/User/Profile';
import DashboardPage from './pages/Admin/Dashboard';
import SignUpPage from './pages/SignUp';
import ConfirmPage from './pages/ConfirmPage';
import Payment from './pages/User/Payment';
import ReferralPage from './pages/User/Referral';
import Transactions from './pages/User/Transactions';
import NotFoundPage from './pages/NotFound';
import ServicePage from './pages/Service';
import SettingWallets from './pages/Admin/SettingWallets';
import AdminTransactionsPage from './pages/Admin/Transactions';
import SystemPage from './pages/User/System';
import IceBreakerPage from './pages/User/IceBreaker';
import TermsPage from './pages/Terms';
import GuidePage from './pages/Guide';
import DreamPoolPage from './pages/User/DreamPool';
import AdminUserPages from './pages/Admin/Users';
import AdminSystemPage from './pages/Admin/System';
import GetVerifyLinkPage from './pages/Admin/GetVerifyLink';
import AdminTransactionDetail from './pages/Admin/TransactionDetail';
import AdminWithdrawPages from './pages/Admin/Withdraw';
import AdminUserProfile from './pages/Admin/UserProfile';
import NewsPage from './pages/News';
import AdminNewsPage from './pages/Admin/News';
import AdminCreateNewsPage from './pages/Admin/News/Create';
import AdminEditNewsPage from './pages/Admin/News/Edit';
import NewsDetailPage from './pages/News/Detail';
import AdminClaimsPage from './pages/Admin/Claims';
import AdminExportClaimsPage from './pages/Admin/Export/ExportClaims';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';
import PermissionsPage from './pages/Admin/Permissions';
import PermissionsDetailsPage from './pages/Admin/Permissions/Details';
import PermissionsCreatePage from './pages/Admin/Permissions/Create';
import AdminPage from './pages/Admin/Admin';
import AdminDetailPage from './pages/Admin/Admin/Detail';
import AdminCreatePage from './pages/Admin/Admin/Create';
import IncomePage from './pages/User/Income';
import ExportUsersPage from './pages/Admin/Export/ExportUsers';
import ExportPaymentsPage from './pages/Admin/Export/ExportPayments';
import CreateUserPage from './pages/Admin/CreateUser';
import ExportWithdrawPage from './pages/Admin/Export/ExportWithdraw';
import WithdrawsPage from './pages/User/Withdraws';
import ExportDreampoolPage from './pages/Admin/Export/ExportDreampool';
import AdminCronjobPage from './pages/Admin/Cronjob';
import RulesPage from './pages/Rules';
import { useSelector } from 'react-redux';
import ClaimsPage from './pages/User/Claims';
import RegisterKYCPage from './pages/User/RegisterKYC';
import ClaimKYCPage from './pages/User/ClaimKYC';
import AdminDoubleKycPage from './pages/Admin/DoubleKyc';
import AdminConfigPage from './pages/Admin/Config';
import UserHistoryPage from './pages/Admin/UserHistory';
import UserUpdateInfoKYCPage from './pages/User/UpdateInfoKYC';
import UsersTier2 from './pages/User/UsersTier2';
import MoveSystem from './pages/Admin/MoveSystem';
import MoveSystemList from './pages/Admin/MoveSystemList';
import AdminWalletConnectHistoryPages from './pages/Admin/WalletConnectHistory';

function App() {
  const { pathname } = useLocation();
  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Routes>
      <Route element={<PublicRoute />}>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route
          path="/home"
          element={
            <>
              <PageTitle title="Homepage | DreamChain" />
              <HomePage />
            </>
          }
        />
        <Route
          path="/services"
          element={
            <>
              <PageTitle title="Services | DreamChain" />
              <ServicePage />
            </>
          }
        />
        <Route
          path="/mechanism"
          element={
            <>
              <PageTitle title="Mechanism | DreamChain" />
              <Mechanism />
            </>
          }
        />
        <Route
          path="/policy"
          element={
            <>
              <PageTitle title="Policy | DreamChain" />
              <PolicyPage />
            </>
          }
        />
        <Route
          path="/contact"
          element={
            <>
              <PageTitle title="Contact | DreamChain" />
              <ContactPage />
            </>
          }
        />
        <Route
          path="/news"
          element={
            <>
              <PageTitle title="News | DreamChain" />
              <NewsPage />
            </>
          }
        />
        <Route
          path="/rules"
          element={
            <>
              <PageTitle title="Rules | DreamChain" />
              <RulesPage />
            </>
          }
        />
        <Route
          path="/news/:id"
          element={
            <>
              <PageTitle title="News | DreamChain" />
              <NewsDetailPage />
            </>
          }
        />
        <Route
          path="/terms"
          element={
            <>
              <PageTitle title="Terms & Conditions | DreamChain" />
              <TermsPage />
            </>
          }
        />
        <Route
          path="/guide"
          element={
            <>
              <PageTitle title="Member’s Guidelines | DreamChain" />
              <GuidePage />
            </>
          }
        />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/confirm" element={<ConfirmPage />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
      </Route>
      <Route element={<PrivateRoute />}>
        <Route
          path="/admin/dashboard"
          element={
            <>
              <PageTitle title="Dashboard | DreamChain" />
              <DashboardPage />
            </>
          }
        />
        {userInfo?.permissions
          ?.find((p) => p.page.path === '/admin/transactions')
          ?.actions.includes('read') && (
          <Route
            path="/admin/transactions"
            element={
              <>
                <PageTitle title="Transactions | DreamChain" />
                <AdminTransactionsPage />
              </>
            }
          />
        )}

        {userInfo?.permissions
          ?.find((p) => p.page.path === '/admin/move-system-list')
          ?.actions.includes('read') && (
          <Route
            path="/admin/move-system-list"
            element={
              <>
                <PageTitle title="Move System List | NoExcuseChallenge" />
                <MoveSystemList />
              </>
            }
          />
        )}

        {userInfo?.permissions
          ?.find((p) => p.page.path === '/admin/users/:id')
          ?.actions.includes('read') && (
          <Route
            path="/admin/users/:id"
            element={
              <>
                <PageTitle title="User Profile | DreamChain" />
                <AdminUserProfile />
              </>
            }
          />
        )}

        {userInfo?.permissions
          ?.find((p) => p.page.path === '/admin/transactions')
          ?.actions.includes('export') && (
          <Route
            path="/admin/transaction/export"
            element={
              <>
                <PageTitle title="Admin Export Transaction | DreamChain" />
                <ExportPaymentsPage />
              </>
            }
          />
        )}

        {userInfo?.permissions
          ?.find((p) => p.page.path === '/admin/transactions/:id')
          ?.actions.includes('read') && (
          <Route
            path="/admin/transactions/:id"
            element={
              <>
                <PageTitle title="Transaction Detail | DreamChain" />
                <AdminTransactionDetail />
              </>
            }
          />
        )}

        {userInfo?.permissions
          ?.find((p) => p.page.path === '/admin/move-system/:id')
          ?.actions.includes('read') && (
          <Route
            path="/admin/move-system/:id"
            element={
              <>
                <PageTitle title="Move System | NoExcuseChallenge" />
                <MoveSystem />
              </>
            }
          />
        )}

        {userInfo?.permissions
          ?.find((p) => p.page.path === '/admin/wallets')
          ?.actions.includes('read') && (
          <Route
            path="/admin/wallets"
            element={
              <>
                <PageTitle title="Setting Wallets | DreamChain" />
                <SettingWallets />
              </>
            }
          />
        )}
        {userInfo?.permissions
          ?.find((p) => p.page.path === '/admin/users')
          ?.actions.includes('read') && (
          <Route
            path="/admin/users"
            element={
              <>
                <PageTitle title="Users | DreamChain" />
                <AdminUserPages />
              </>
            }
          />
        )}

        {userInfo?.permissions
          ?.find((p) => p.page.path === '/admin/system/:id')
          ?.actions.includes('read') && (
          <Route
            path="/admin/system/:id"
            element={
              <>
                <PageTitle title="System | DreamChain" />
                <AdminSystemPage />
              </>
            }
          />
        )}
        {userInfo?.permissions
          ?.find((p) => p.page.path === '/admin/linkVerify')
          ?.actions.includes('read') && (
          <Route
            path="/admin/linkVerify"
            element={
              <>
                <PageTitle title="Link verify | DreamChain" />
                <GetVerifyLinkPage />
              </>
            }
          />
        )}
        {userInfo?.permissions
          ?.find((p) => p.page.path === '/admin/withdraw')
          ?.actions.includes('read') && (
          <Route
            path="/admin/withdraw"
            element={
              <>
                <PageTitle title="Withdraw request | DreamChain" />
                <AdminWithdrawPages />
              </>
            }
          />
        )}
        {userInfo?.permissions
          ?.find((p) => p.page.path === '/admin/withdraw')
          ?.actions.includes('export') && (
          <Route
            path="/admin/withdraw/export"
            element={
              <>
                <PageTitle title="Admin Export Withdraw | DreamChain" />
                <ExportWithdrawPage />
              </>
            }
          />
        )}
        {userInfo?.permissions
          ?.find((p) => p.page.path === '/admin/news')
          ?.actions.includes('read') && (
          <Route
            path="/admin/news"
            element={
              <>
                <PageTitle title="News | DreamChain" />
                <AdminNewsPage />
              </>
            }
          />
        )}
        {userInfo?.permissions
          ?.find((p) => p.page.path === '/admin/claims')
          ?.actions.includes('read') && (
          <Route
            path="/admin/claims"
            element={
              <>
                <PageTitle title="Claims | DreamChain" />
                <AdminClaimsPage />
              </>
            }
          />
        )}
        {userInfo?.permissions
          ?.find((p) => p.page.path === '/admin/claims')
          ?.actions.includes('export') && (
          <Route
            path="/admin/claims/export"
            element={
              <>
                <PageTitle title="Export Claims | DreamChain" />
                <AdminExportClaimsPage />
              </>
            }
          />
        )}
        {userInfo?.permissions
          ?.find((p) => p.page.path === '/admin/news/create')
          ?.actions.includes('read') && (
          <Route
            path="/admin/news/create"
            element={
              <>
                <PageTitle title="Create News | DreamChain" />
                <AdminCreateNewsPage />
              </>
            }
          />
        )}

        {userInfo?.permissions
          ?.find((p) => p.page.path === '/admin/news/edit')
          ?.actions.includes('read') && (
          <Route
            path="/admin/news/edit"
            element={
              <>
                <PageTitle title="Edit News | DreamChain" />
                <AdminEditNewsPage />
              </>
            }
          />
        )}

        {userInfo?.permissions
          ?.find((p) => p.page.path === '/admin/dreampool')
          ?.actions.includes('read') && (
          <Route
            path="/admin/dreampool"
            element={
              <>
                <PageTitle title="DreamPool | DreamChain" />
                <DreamPoolPage />
              </>
            }
          />
        )}
        {userInfo?.permissions
          ?.find((p) => p.page.path === '/admin/dreampool')
          ?.actions.includes('export') && (
          <Route
            path="/admin/dreampool/export"
            element={
              <>
                <PageTitle title="Export DreamPool | DreamChain" />
                <ExportDreampoolPage />
              </>
            }
          />
        )}
        {userInfo?.permissions
          ?.find((p) => p.page.path === '/admin/permissions')
          ?.actions.includes('read') && (
          <Route
            path="/admin/permissions"
            element={
              <>
                <PageTitle title="Permissions | DreamChain" />
                <PermissionsPage />
              </>
            }
          />
        )}
        {userInfo?.permissions
          ?.find((p) => p.page.path === '/admin/permissions/:id')
          ?.actions.includes('read') && (
          <Route
            path="/admin/permissions/:id"
            element={
              <>
                <PageTitle title="Permissions Details | DreamChain" />
                <PermissionsDetailsPage />
              </>
            }
          />
        )}
        {userInfo?.permissions
          ?.find((p) => p.page.path === '/admin/permissions/create')
          ?.actions.includes('read') && (
          <Route
            path="/admin/permissions/create"
            element={
              <>
                <PageTitle title="Create New Permissions | DreamChain" />
                <PermissionsCreatePage />
              </>
            }
          />
        )}
        {userInfo?.permissions
          ?.find((p) => p.page.path === '/admin/admin')
          ?.actions.includes('read') && (
          <Route
            path="/admin/admin"
            element={
              <>
                <PageTitle title="Admin | DreamChain" />
                <AdminPage />
              </>
            }
          />
        )}
        {userInfo?.permissions
          ?.find((p) => p.page.path === '/admin/create-admin')
          ?.actions.includes('read') && (
          <Route
            path="/admin/create-admin"
            element={
              <>
                <PageTitle title="Create new Admin | DreamChain" />
                <AdminCreatePage />
              </>
            }
          />
        )}
        {userInfo?.permissions
          ?.find((p) => p.page.path === '/admin/admin/:id')
          ?.actions.includes('read') && (
          <Route
            path="/admin/admin/:id"
            element={
              <>
                <PageTitle title="Admin Detail | DreamChain" />
                <AdminDetailPage />
              </>
            }
          />
        )}
        {userInfo?.permissions
          ?.find((p) => p.page.path === '/admin/users')
          ?.actions.includes('export') && (
          <Route
            path="/admin/user/export"
            element={
              <>
                <PageTitle title="Admin Export User | DreamChain" />
                <ExportUsersPage />
              </>
            }
          />
        )}
        {userInfo?.permissions
          ?.find((p) => p.page.path === '/admin/users')
          ?.actions.includes('create') && (
          <Route
            path="/admin/users/create"
            element={
              <>
                <PageTitle title="Admin Create User | DreamChain" />
                <CreateUserPage />
              </>
            }
          />
        )}
        {userInfo?.permissions
          ?.find((p) => p.page.path === '/admin/cronjob')
          ?.actions.includes('read') && (
          <Route
            path="/admin/cronjob"
            element={
              <>
                <PageTitle title="Cronjob | DreamChain" />
                <AdminCronjobPage />
              </>
            }
          />
        )}
        {userInfo?.permissions
          ?.find((p) => p.page.path === '/admin/double-kyc')
          ?.actions.includes('read') && (
          <Route
            path="/admin/double-kyc"
            element={
              <>
                <PageTitle title="Double KYC | DreamChain" />
                <AdminDoubleKycPage />
              </>
            }
          />
        )}
        {userInfo?.permissions
          ?.find((p) => p.page.path === '/admin/config')
          ?.actions.includes('read') && (
          <Route
            path="/admin/config"
            element={
              <>
                <PageTitle title="Config | DreamChain" />
                <AdminConfigPage />
              </>
            }
          />
        )}
        {userInfo?.permissions
          ?.find((p) => p.page.path === '/admin/user-history')
          ?.actions.includes('read') && (
          <Route
            path="/admin/user-history"
            element={
              <>
                <PageTitle title="User History | DreamChain" />
                <UserHistoryPage />
              </>
            }
          />
        )}

        {userInfo?.permissions
          ?.find((p) => p.page.path === '/admin/user/tier2')
          ?.actions.includes('read') && (
          <Route
            path="/admin/user/tier2"
            element={
              <>
                <PageTitle title="Users Tier2 | DreamChain" />
                <UsersTier2 />
              </>
            }
          />
        )}

        {userInfo?.permissions
          ?.find((p) => p.page.path === '/admin/wallet-connect-list')
          ?.actions.includes('read') && (
          <Route
            path="/admin/wallet-connect-list"
            element={
              <>
                <PageTitle title="Wallet Connect List | NoExcuseChallenge" />
                <AdminWalletConnectHistoryPages />
              </>
            }
          />
        )}
      </Route>
      <Route element={<PrivateRoute />}>
        <Route
          path="/user/profile"
          element={
            <>
              <PageTitle title="Profile | DreamChain" />
              <Profile />
            </>
          }
        />
        {userInfo?.isOld === false && (
          <>
            <Route
              path="/user/payment"
              element={
                <>
                  <PageTitle title="Payment | DreamChain" />
                  <Payment />
                </>
              }
            />
            <Route
              path="/user/system"
              element={
                <>
                  <PageTitle title="System | DreamChain" />
                  <SystemPage />
                </>
              }
            />
            <Route
              path="/user/referral"
              element={
                <>
                  <PageTitle title="Referral | DreamChain" />
                  <ReferralPage />
                </>
              }
            />
            <Route
              path="/user/transactions"
              element={
                <>
                  <PageTitle title="Transactions | DreamChain" />
                  <Transactions />
                </>
              }
            />
            <Route
              path="/user/ice-breakers"
              element={
                <>
                  <PageTitle title="Ice Breakers | DreamChain" />
                  <IceBreakerPage />
                </>
              }
            />
            <Route
              path="/user/dreampool"
              element={
                <>
                  <PageTitle title="DreamPool | DreamChain" />
                  <DreamPoolPage />
                </>
              }
            />
            <Route
              path="/user/income"
              element={
                <>
                  <PageTitle title="Income | DreamChain" />
                  <IncomePage />
                </>
              }
            />
            <Route
              path="/user/withdraws"
              element={
                <>
                  <PageTitle title="Withdraws | DreamChain" />
                  <WithdrawsPage />
                </>
              }
            />
            <Route
              path="/user/claims"
              element={
                <>
                  <PageTitle title="Claims | DreamChain" />
                  <ClaimsPage />
                </>
              }
            />
            <Route
              path="/user/kyc"
              element={
                <>
                  <PageTitle title="Register KYC | DreamChain" />
                  <RegisterKYCPage />
                </>
              }
            />
            <Route
              path="/user/update-info"
              element={
                <>
                  <PageTitle title="Update Info | DreamChain" />
                  <UserUpdateInfoKYCPage />
                </>
              }
            />
            {userInfo?.tier > 1 && (
              <Route
                path="/user/tier2"
                element={
                  <>
                    <PageTitle title="Users Tier 2 | DreamChain" />
                    <UsersTier2 />
                  </>
                }
              />
            )}
          </>
        )}
      </Route>
      <Route
        path="/user/claim"
        element={
          <>
            <PageTitle title="Claim KYC | DreamChain" />
            <ClaimKYCPage />
          </>
        }
      />
      <Route path="*" element={<NotFoundPage />}></Route>
    </Routes>
  );
}

export default App;
