import { InsideSheetWrapper, PageWrapper } from '@/components/layout';
import { Card, CardContent } from '@/components/ui/card';

const DashboardView = () => (
    <PageWrapper
        description="Selamat datang di dashboard Anda"
        title="Dashboard"
    >
        <Card>
            <CardContent>
                <p>Dashboard Card Content</p>
            </CardContent>
        </Card>
        <InsideSheetWrapper>
            <p>Dashboard Inside Sheet</p>
        </InsideSheetWrapper>
    </PageWrapper>
);

export default DashboardView;
