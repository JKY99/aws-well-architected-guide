import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixRel9Bp01Page() {
  return (
    <article className="doc-content">
      <h1>REL09-BP01 — 백업이 필요한 모든 데이터를 파악하고 백업하거나 소스에서 데이터를 재현</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 높음</div>
        <p>이 모범 사례를 수립하지 않으면 높은 수준의 위험이 노출됩니다.</p>
      </div>
      <p>
        데이터 소스를 파악하고 중요도에 따라 분류합니다. RPO를 기반으로 복구 전략을 수립하여
        중요한 데이터 소스를 백업하거나 다른 소스에서 데이터를 재현합니다.
      </p>
      <h2>원하는 결과</h2>
      <p>
        데이터 소스가 파악되고 중요도에 따라 분류됩니다. RPO를 기반으로 복구 전략이 수립되어
        중요한 데이터 소스를 백업하거나 다른 소스에서 데이터를 재현할 수 있습니다.
        데이터 손실 이벤트 시 정의된 RPO 및 RTO 내에 데이터를 복구/재현할 수 있습니다.
      </p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>모든 데이터 소스와 그 중요도를 인식하지 못함</li>
        <li>중요한 데이터 소스의 백업 없음</li>
        <li>중요도 기준 없이 일부 데이터 소스만 백업</li>
        <li>정의된 RPO 없거나 백업 빈도가 RPO를 충족할 수 없음</li>
        <li>백업 필요 여부 대 데이터 재현 가능 여부를 평가하지 않음</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>중단 시 데이터 복원 및 복구 능력 향상</li>
        <li>중앙화된 데이터 보호 전략</li>
        <li>정의된 복구 목표를 충족하는 능력</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>모든 데이터 소스 파악: 데이터베이스, 볼륨, 파일시스템, 로그, 객체 스토리지</li>
        <li>중요도에 따라 분류: 데이터 세트별 RPO/RTO 요구사항 결정</li>
        <li>백업 생성: AWS Backup, 네이티브 서비스 기능 또는 서드파티 도구 사용</li>
        <li>데이터 재현 수립: 비중요 데이터의 경우 캐시, 읽기 복제본, EMR 등에서 재현 고려</li>
        <li>백업 주기 설정: RPO 요구사항에 따른 빈도 결정</li>
        <li>AWS Backup을 사용하여 EC2, RDS, DynamoDB, EFS, S3 등 여러 서비스의 백업을 중앙에서 관리</li>
        <li>Amazon ElastiCache 복제 노드, RDS 읽기 복제본, EMR(S3에서 재현) 등 데이터 재현 메커니즘 활용</li>
        <li>AWS Elastic Disaster Recovery를 사용하여 서브초 RPO의 지속적 데이터 보호 구현</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Backup (여러 AWS 서비스에 걸쳐 중앙화된 자동화 데이터 보호)</li>
        <li>AWS Elastic Disaster Recovery (서브초 RPO의 지속적 데이터 보호)</li>
        <li>AWS DataSync/Storage Gateway (온프레미스 데이터를 AWS로 백업)</li>
        <li>Amazon S3 (계층형 스토리지를 갖춘 범용 백업 대상, Glacier, Deep Archive)</li>
      </ul>
      <PageNav />
    </article>
  );
}
