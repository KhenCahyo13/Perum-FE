import { InsideSheetWrapper, PageWrapper } from '@/components/layout';
import { Card, CardContent } from '@/components/ui/card';

const HomeView = () => (
    <PageWrapper
        description="Manajemen data rumah Anda dengan mudah"
        insideSheetContent={
            <>
                <InsideSheetWrapper>
                    <p>Home Inside Sheet</p>
                </InsideSheetWrapper>
            </>
        }
        title="Rumah"
    >
        <Card>
            <CardContent>
                <p>Home Card Content</p>
            </CardContent>
        </Card>
    </PageWrapper>
);

export default HomeView;
