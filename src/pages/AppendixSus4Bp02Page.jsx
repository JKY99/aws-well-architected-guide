import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixSus4Bp02Page() {
  return (
    <article className="doc-content">
      <h1>SUS04-BP02 — 수명 주기 정책으로 데이터 냉각</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 중간입니다.</p>
      </div>
      <p>S3 Lifecycle, Amazon S3 Glacier 등을 활용하여 접근 빈도에 따라 최적의 스토리지 계층으로 데이터를 이동합니다. 자주 접근하지 않는 데이터를 고성능 스토리지에 유지하면 불필요한 에너지를 소비합니다. 데이터 접근 패턴에 기반한 자동 계층화를 통해 에너지 효율적인 콜드 스토리지로 데이터를 이동시킵니다.</p>
      <h2>원하는 결과</h2>
      <p>데이터 접근 빈도에 따라 자동으로 적절한 스토리지 계층으로 이동되는 수명 주기 정책을 구현하여 스토리지 에너지 소비를 최적화합니다.</p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>수년 된 아카이브 데이터를 S3 Standard와 같은 고성능 스토리지에 유지합니다.</li>
        <li>수명 주기 정책 없이 모든 데이터에 동일한 스토리지 클래스를 적용합니다.</li>
        <li>데이터 접근 패턴을 분석하지 않고 스토리지 계층을 선택합니다.</li>
        <li>비즈니스 요구사항 변화에 따라 수명 주기 정책을 업데이트하지 않습니다.</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>콜드 스토리지는 핫 스토리지 대비 훨씬 낮은 에너지를 사용합니다.</li>
        <li>스토리지 비용이 접근 빈도에 비례하여 최적화됩니다.</li>
        <li>자동화된 수명 주기 관리로 운영 오버헤드가 감소합니다.</li>
        <li>규정 준수 요구사항을 충족하면서 에너지 효율을 높입니다.</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>Amazon S3 Intelligent-Tiering을 활용하여 접근 패턴에 따라 자동으로 계층을 전환합니다.</li>
        <li>S3 Lifecycle 규칙을 설정하여 일정 기간 후 S3 Glacier로 자동 이동합니다.</li>
        <li>Amazon S3 Storage Lens로 데이터 접근 패턴을 분석하고 최적 계층화 전략을 수립합니다.</li>
        <li>데이터베이스의 오래된 레코드는 Amazon S3로 아카이브하여 데이터베이스 크기를 관리합니다.</li>
        <li>S3 Glacier Instant Retrieval, Flexible Retrieval, Deep Archive 중 복구 시간 요구사항에 맞는 계층을 선택합니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>Amazon S3 Lifecycle — 자동 스토리지 계층 전환 정책</li>
        <li>Amazon S3 Intelligent-Tiering — AI 기반 자동 스토리지 최적화</li>
        <li>Amazon S3 Glacier — 장기 아카이브용 저비용 콜드 스토리지</li>
        <li>Amazon S3 Storage Lens — 스토리지 사용 패턴 분석</li>
        <li>AWS Storage Gateway — 온프레미스와 클라우드 스토리지 계층화</li>
      </ul>
      <PageNav />
    </article>
  );
}
