import { Outlet, RouteObject } from 'react-router-dom';

import { ScanInfraLayout } from '../features/onboard/layouts/InfraScanLayout';
import {
  OnboardLayout,
  rootOnboardLoader,
} from '../features/onboard/layouts/OnboardLayout';
import { AmazonECRConnector } from '../features/onboard/pages/AmazonECRConnector';
import { AWSChooseScan } from '../features/onboard/pages/AWSChooseScan';
import { AWSConnector } from '../features/onboard/pages/AWSConnector';
import { AzureConnector } from '../features/onboard/pages/AzureConnector';
import { ComplianceScanConfigure } from '../features/onboard/pages/ComplianceScanConfigure';
import { Connector } from '../features/onboard/pages/Connector';
import { GCPConnector } from '../features/onboard/pages/GCPConnector';
import { K8sConnector } from '../features/onboard/pages/K8sConnector';
import { SecretScanConfigure } from '../features/onboard/pages/SecretScanConfigure';
import { VulnerabilityScanConfigure } from '../features/onboard/pages/VulnerabilityScanConfigure';

export const privateRoutes: RouteObject[] = [
  {
    path: '/onboard',
    element: <OnboardLayout />,
    loader: rootOnboardLoader,
    children: [
      {
        path: 'add-connectors',
        element: <Outlet />,
        children: [
          {
            index: true,
            element: <Connector page="add-connectors" />,
          },
          {
            path: 'cloud/aws',
            element: <AWSConnector />,
          },
          {
            path: 'cloud/gcp',
            element: <GCPConnector />,
          },
          {
            path: 'cloud/azure',
            element: <AzureConnector />,
          },
          {
            path: 'host/k8s',
            element: <K8sConnector />,
          },
          {
            path: 'registry/amazon-ecr',
            element: <AmazonECRConnector />,
          },
        ],
      },
      {
        path: 'my-connectors',
        element: <Outlet />,
        children: [
          {
            index: true,
            element: <Connector page="my-connectors" />,
          },
        ],
      },
      {
        path: 'scan-infrastructure',
        element: <Outlet />,
        children: [
          {
            path: 'cloud/aws',
            element: <AWSChooseScan />,
          },
          {
            path: 'cloud/aws/configure',
            element: <ComplianceScanConfigure />,
          },
          {
            path: 'host/configure/vulnerability',
            element: <VulnerabilityScanConfigure />,
          },
          {
            path: 'host/configure/secret',
            element: <SecretScanConfigure />,
          },
        ],
      },
    ],
  },
];
