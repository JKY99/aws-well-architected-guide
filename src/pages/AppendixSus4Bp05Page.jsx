import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixSus4Bp05Page() {
  return (
    <article className="doc-content">
      <h1>SUS04-BP05 — 가장 에너지 효율적인 스토리지 계층에 데이터 저장</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 중간입니다.</p>
      </div>
      <p>접근 패턴에 따라 HDD vs SSD, 콜드 vs 핫 스토리지를 최적으로 선택합니다. SSD는 HDD보다 빠르지만 일반적으로 더 많은 에너지를 소비합니다. 자주 접근하지 않는 데이터에 고에너지 SSD를 사용하는 것은 불필요한 에너지 낭비입니다. 데이터의 접근 빈도, 응답 시간 요구사항, 비즈니스 중요도에 따라 올바른 스토리지 미디어를 선택해야 합니다.</p>
      <h2>원하는 결과</h2>
      <p>각 데이터의 접근 패턴과 성능 요구사항에 맞는 가장 에너지 효율적인 스토리지 계층을 사용하여 전체 스토리지 인프라의 에너지 소비를 최소화합니다.</p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>거의 접근하지 않는 아카이브 데이터에 프로비저닝된 IOPS SSD를 사용합니다.</li>
        <li>모든 EBS 볼륨을 최고 성능 타입(io2)으로 설정합니다.</li>
        <li>데이터 접근 패턴을 분석하지 않고 기본 스토리지 클래스를 사용합니다.</li>
        <li>성능 요구사항이 낮은 워크로드에 NVMe SSD를 사용합니다.</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>스토리지 에너지 소비가 실제 접근 패턴에 맞게 최적화됩니다.</li>
        <li>과도한 스토리지 성능 프로비저닝으로 인한 에너지 낭비가 제거됩니다.</li>
        <li>스토리지 비용이 성능 요구사항에 비례하여 최적화됩니다.</li>
        <li>전체 스토리지 인프라의 탄소 발자국이 감소합니다.</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>Amazon S3 Storage Lens와 CloudWatch로 데이터 접근 패턴을 분석합니다.</li>
        <li>순차 I/O 워크로드(로그, 빅데이터)에는 HDD 기반 EBS(st1)를 사용합니다.</li>
        <li>콜드 데이터는 S3 Glacier Deep Archive와 같은 최저 에너지 스토리지를 활용합니다.</li>
        <li>Amazon S3 Intelligent-Tiering으로 접근 패턴에 따라 자동으로 최적 스토리지를 선택합니다.</li>
        <li>EBS 볼륨 타입을 정기적으로 검토하고 실제 IOPS 사용량에 맞게 다운그레이드합니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>Amazon EBS — gp3, io2, st1, sc1 등 다양한 성능 수준의 볼륨 타입</li>
        <li>Amazon S3 스토리지 클래스 — Standard, IA, Glacier 등 계층별 에너지 효율</li>
        <li>Amazon S3 Intelligent-Tiering — 접근 패턴 기반 자동 계층 최적화</li>
        <li>Amazon S3 Storage Lens — 스토리지 사용 및 접근 패턴 분석</li>
        <li>AWS Compute Optimizer — EBS 볼륨 타입 최적화 권고</li>
      </ul>
      <PageNav />
    </article>
  );
}
