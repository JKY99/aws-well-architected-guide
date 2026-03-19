import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixSus4Bp03Page() {
  return (
    <article className="doc-content">
      <h1>SUS04-BP03 — 불필요한 데이터 이동 최소화</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 중간입니다.</p>
      </div>
      <p>데이터 전송 거리와 빈도를 줄여 에너지 소비와 비용을 절감합니다. 데이터를 네트워크를 통해 이동할 때마다 에너지가 소비되며, 특히 장거리 또는 리전 간 데이터 전송은 상당한 에너지를 사용합니다. 데이터를 사용 위치에 가깝게 저장하고 불필요한 복제를 피하면 전체 에너지 소비를 줄일 수 있습니다.</p>
      <h2>원하는 결과</h2>
      <p>데이터가 필요한 컴퓨팅 리소스와 가까운 위치에 저장되고, 불필요한 데이터 이동과 복제가 최소화되어 네트워크 에너지 소비와 데이터 전송 비용이 감소합니다.</p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>분석 작업을 위해 대량의 데이터를 원격 리전으로 복사합니다.</li>
        <li>컴퓨팅 리소스와 다른 리전에 데이터를 저장합니다.</li>
        <li>필요하지 않은 리전 간 데이터 복제를 설정합니다.</li>
        <li>작은 파일을 개별적으로 자주 전송하여 오버헤드를 증가시킵니다.</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>네트워크 에너지 소비가 줄어들어 전체 탄소 발자국이 감소합니다.</li>
        <li>데이터 전송 지연이 감소하여 애플리케이션 성능이 향상됩니다.</li>
        <li>리전 간 데이터 전송 비용이 절감됩니다.</li>
        <li>데이터 로컬리티 향상으로 처리 효율성이 높아집니다.</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>데이터와 컴퓨팅 리소스를 같은 리전과 가용 영역에 배치합니다.</li>
        <li>Amazon S3 Select와 Amazon Athena를 사용하여 필요한 데이터만 추출하고 전송합니다.</li>
        <li>AWS Direct Connect로 온프레미스-클라우드 간 효율적인 전용 연결을 구성합니다.</li>
        <li>작은 파일을 배치로 묶어 전송하여 네트워크 오버헤드를 줄입니다.</li>
        <li>VPC 엔드포인트를 사용하여 인터넷을 거치지 않는 내부 데이터 전송을 구현합니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>Amazon S3 Select — 객체에서 필요한 데이터만 선택적으로 검색</li>
        <li>Amazon Athena — 데이터를 이동하지 않고 S3에서 직접 쿼리</li>
        <li>AWS Direct Connect — 전용 네트워크 연결로 효율적인 데이터 전송</li>
        <li>VPC 엔드포인트 — AWS 서비스와 내부 네트워크 통신</li>
        <li>Amazon CloudFront — 엣지 캐싱으로 오리진 데이터 전송 최소화</li>
      </ul>
      <PageNav />
    </article>
  );
}
