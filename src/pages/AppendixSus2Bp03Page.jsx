import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixSus2Bp03Page() {
  return (
    <article className="doc-content">
      <h1>SUS02-BP03 — 미사용 자산, 리소스, 서비스 제거</h1>

      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 중간입니다.</p>
      </div>

      <p>
        더 이상 사용되지 않는 리소스, 자산, 서비스를 정기적으로 식별하고 제거합니다.
        유휴 상태의 인스턴스, 미연결 EBS 볼륨, 사용하지 않는 로드 밸런서 등은 에너지를 소비하면서
        비즈니스 가치를 창출하지 못하므로 탄소 배출의 낭비 요인이 됩니다.
      </p>

      <h2>원하는 결과</h2>
      <p>
        모든 프로비저닝된 리소스가 실제 워크로드를 처리하고 있으며, 유휴 또는 미사용 상태의 리소스가
        없습니다. 정기적인 검토 프로세스를 통해 불필요한 리소스가 신속하게 식별되고 제거됩니다.
      </p>

      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>프로젝트 종료 후 관련 리소스를 정리하지 않아 유휴 상태로 장기간 운영되는 경우</li>
        <li>리소스 활용률을 정기적으로 검토하는 프로세스가 없는 경우</li>
        <li>임시로 생성한 개발용 리소스를 삭제하지 않고 방치하는 경우</li>
        <li>비연결 상태의 EBS 볼륨, 미사용 탄력적 IP, 빈 S3 버킷을 정리하지 않는 경우</li>
      </ul>

      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>미사용 리소스로 인한 불필요한 에너지 소비 및 탄소 배출 제거</li>
        <li>클라우드 비용 직접 절감</li>
        <li>인프라 복잡성 감소로 관리 부담 완화</li>
        <li>리소스 정리를 통한 보안 공격 표면 축소</li>
      </ul>

      <h2>구현 지침</h2>
      <ul>
        <li>AWS Trusted Advisor를 사용하여 저활용 EC2 인스턴스, 미연결 EBS 볼륨, 유휴 로드 밸런서를 식별합니다.</li>
        <li>AWS Cost Explorer와 CloudWatch 지표를 활용하여 활용률이 낮은 리소스를 정기적으로 파악합니다.</li>
        <li>리소스 태그 정책을 수립하여 소유자, 프로젝트, 만료일 등을 명시하고 정기 검토를 진행합니다.</li>
        <li>AWS Config Rules를 통해 미사용 리소스 탐지를 자동화합니다.</li>
        <li>분기별 리소스 정리 프로세스를 수립하고 책임자를 지정합니다.</li>
      </ul>

      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Trusted Advisor — 저활용 및 미사용 리소스 식별</li>
        <li>AWS Cost Explorer — 리소스별 비용 및 활용률 분석</li>
        <li>AWS Config — 리소스 구성 변경 추적 및 규정 준수 자동화</li>
        <li>Amazon CloudWatch — 리소스 활용률 지표 모니터링</li>
      </ul>

      <PageNav />
    </article>
  );
}
