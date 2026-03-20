import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixRel11Bp05Page() {
  return (
    <article className="doc-content">
      <h1>REL11-BP05 — 이중 모드 동작을 방지하는 정적 안정성 사용</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 수립하지 않으면 중간 수준의 위험이 노출됩니다.</p>
      </div>
      <p>
        워크로드가 정상 모드와 장애 모드에서 다른 동작을 보이지 않도록 합니다.
      </p>
      <h2>원하는 결과</h2>
      <p>
        워크로드가 정상 모드와 장애 모드에서 이중 모드 동작을 보이지 않습니다.
      </p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>장애 범위에 관계없이 리소스를 항상 프로비저닝할 수 있다고 가정</li>
        <li>장애 중에 동적으로 리소스를 획득 시도</li>
        <li>장애가 발생할 때까지 영역 또는 리전 전반에 충분한 리소스를 프로비저닝하지 않음</li>
        <li>컴퓨팅 리소스에만 정적 안정적 설계 고려</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>정적 안정적 설계로 운영하는 워크로드는 정상 및 장애 이벤트 모두에서 예측 가능한 결과를 제공</li>
        <li>장애를 복합시키는 예상치 못한 시스템 동작 및 부정적 피드백 루프 제거</li>
        <li>다른 영역/리전의 리소스 가용성에 의존하지 않고 신뢰할 수 있는 장애 조치 제공</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>하나의 AZ 또는 리전이 제거될 경우 워크로드 용량을 처리할 수 있도록 각 AZ 또는 리전에 충분한 인스턴스를 프로비저닝하여 단일 모드로만 운영하는 정적 안정적 시스템 구축</li>
        <li>컴퓨팅 리소스(EC2, EKS-EC2, ECS-EC2, EMR-EC2): 교차 리전 DNS 라우팅, AWS Global Accelerator, Amazon Application Recovery Controller와 함께 충분한 인스턴스 확보</li>
        <li>데이터베이스(RDS, Aurora): AZ 장애 시 전체 필요에 맞는 수량의 읽기 복제본 구성, 멀티 AZ 배포</li>
        <li>스토리지: S3 스토리지를 영역 전체에 걸쳐 정적 안정적으로 설계, 중요 데이터에 단일 영역-IA 스토리지 방지, MRAP(멀티 리전 액세스 포인트)로 멀티 리전 S3 접근 구성</li>
        <li>로드 밸런서: 교차 영역 로드 밸런싱을 적절히 구성하고 여러 AZ에 워크로드 분산</li>
        <li>비용 대비 신뢰성 트레이드오프: 감소된 용량 프로비저닝 후 동적 스케일링에 의존하면 비용은 절감되지만 대규모 장애(AZ/리전 장애) 시 무효화됨</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>Amazon EC2 (EC2, EKS-EC2, ECS-EC2, EMR-EC2 사전 프로비저닝)</li>
        <li>AWS Global Accelerator (정적 안정적 트래픽 라우팅)</li>
        <li>Amazon Application Recovery Controller (ARC) (안정적인 장애 조치 라우팅)</li>
        <li>Amazon RDS, Aurora (멀티 AZ 읽기 복제본)</li>
        <li>Amazon S3 (MRAP을 통한 멀티 리전 접근)</li>
        <li>Amazon Redshift, EFS, FSx (정적 안정성 설계 고려 필요)</li>
      </ul>
      <PageNav />
    </article>
  );
}
